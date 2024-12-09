import multer from "multer"

import fs from"fs"
// import { S3 } from "aws-sdk"
import { s3 } from "../../config/db.js"
import path from "path"

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null,"/")
    },
    filename:(req, file, cb)=>{
        cb(null, file.fieldname +'-'+ Date.now() + path.extname(file.originalname))
    }
})
 export const upload = multer({storage: storage})
 
export const fileUpload= async(file)=>{
    console.log(file.path)
    const params={
        Bucket: "sidxcoder",
        Key: file.filename,
        Body: fs.readFileSync(file.path),
      
    }

    await s3.upload(params, (err, data)=>{
        if(err){
            console.log("error while uploading",err)
            return err
        }
        console.log(data.Location);
        
    })
    const url = s3.getSignedUrl('getObject',{
        Bucket: "sidxcoder",
        Key: file.filename,
    })
    return url 
}
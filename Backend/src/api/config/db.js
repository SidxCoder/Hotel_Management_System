import mongoose from "mongoose"
import AWS from "aws-sdk"
import env from "../../infrastructure/env.js"

AWS.config.update({ 
    accessKeyId: env.AWS_ACCESS_ID, 
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY, 
    region: 'ap-south-1' 
});


export const s3 = new AWS.S3()
async function dbConnection(){
    await mongoose .connect(env.MONGO_URL)
    .then(()=>{
        console.log("mongo database connected");
        
    })
    .catch((err)=>{
        console.log("Error while connecting mongoose",err);
        
    })
}
export default dbConnection
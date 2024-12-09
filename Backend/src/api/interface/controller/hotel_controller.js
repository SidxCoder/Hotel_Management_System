import { hotelValidator } from "../../config/helpers/validator.js"
import hotel from "../../config/schema/hotel.schema.js"
import { fileUpload } from "../Model/hotel.model.js"



export const addHotel = async(req,res)=>{
    console.log("hii")
    const body = req.body
    console.log(body)
    const file=req.file
    console.log(file)
   
    
    
    try {
        // const success = hotelValidator.safeParse(body)
        // if(!success.success){
        //     return res.status(401).json({msg: "data not in format"})
        // }
        const url = await fileUpload(file)
        console.log("hii")
        const response = await hotel.create({
            hotelName: body.name,
            area: body.area,
            city: body.city,
            state: body.state,
            price: body.price,
            unmarriedFriendly: body.unmarriedFriendly,
            image: url,
            AcRoomA: body.AcRoomA,
            NonAcRoomA: body.NonAcRoomA,
            TotalAc: body.TotalAc,
            TotalNonAc: body.TotalNonAc,
            status: true,
            createdBy: req.userId
        })
        res.json({msg:"hotel added"})
    } catch (error) {
        console.log(error);
        return res.status(403).json({msg:"error while adding"})
        
    }
}

export const updateHotel = async(req,res)=>{
    const body = req.body;
    try {
        const response = await hotel.updateOne({createdBy:req.userId},{
            name: body.name,
            area: body.area,
            city: body.city,
            state: body.state,
            price: body.price,
            unmarriedFriendly: body.unmarriedFriendly,
            image: url,
            AcRoomA: body.AcRoomA,
            NonAcRoomA: body.NonAcRoomA,
            TotalAc: body.TotalAc,
            TotalNonAc: body.TotalNonAc,
            status: body.status,
            createdBy: req.userId
        })
        res.json({mmsg:"hotel updated"})
    } catch (error) {
        console.log("updating hotel",error);
        return res.status(401).json({msg:"error while updating"})
        
    }
}
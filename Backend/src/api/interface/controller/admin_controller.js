import express from "express"
import bookings from "../../config/schema/booking.schema.js"
import { adminSigninValidator } from "../../config/helpers/validator.js"
import admin from "../../config/schema/admin.schema.js"
import jwt from "jsonwebtoken"

import env from "../../../infrastructure/env.js"
import user from "../../config/schema/user.schema.js"

export const adminSignin = async (req,res)=>{

    const body = req.body
    try {
        const success = adminSigninValidator.safeParse(body)
        if(!success.success){
            return res.status(403).json({msg:"input not in format"})
        }
        const response = await admin.findOne({
            username:body.usename,
            password:body.passowrd
        })
        if(!response || response ==null){
            return res.status(403).json({
                msg:"user not found"
            })
        }
        const token = jwt.sign(response._id.toHexString(),env.SECRET_KEY)

        res.json({
            username:response.username,
            token:token
        })
    } catch (error) {
        console.log("error while admin signin",error);
        return res.status(403).json("error while signin ")
        
    }
}

export const AllBookings = async(req,res)=>{
    try {
        const response = await bookings.find([]).populate('hotelName','name')
        res.json(response)
    } catch (error) {
        console.log("error while feting all bookings",error)
        res.status(401).json({
            msg: "error while fetching al bookings"
        })
    }
}
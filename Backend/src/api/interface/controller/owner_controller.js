import jwt from "jsonwebtoken";
import owner from "../../config/schema/owner.schema.js";
import hotel from "../../config/schema/hotel.schema.js";
import bookings from "../../config/schema/booking.schema.js";
import bcrypt from "bcrypt";
import {
  ownerSigninValidator,
  ownerSignupValidator,
} from "../../config/helpers/validator.js";
import env from "../../../infrastructure/env.js";

export const ownerSignup = async (req, res) => {
  const body = req.body;
  console.log(body);

  try {
    const success = ownerSignupValidator.safeParse(body);
    if (!success.success) {
      return res.status(403).json({ msg: "Data not in format" });
    }

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const check = await owner.findOne({ email: body.email });

    if (check) {
      return res.status(401).json({
        msg: "owner already exists",
      });
    }
    const response = await owner.create({
      name: body.name,
      phone: body.phone,
      email: body.email,
      idProof: body.idProof,
      password: hashedPassword,
    });
    const token = jwt.sign(response._id.toHexString(), env.SECRET_KEY);
    console.log(response.name);
    res.json({
      ownername: response.name,
      token: token,
    });
  } catch (error) {
    console.log("error while siginup", error);
    return res.status(402).json({ msg: "error while signup" });
  }
};

export const ownerSignin = async (req, res) => {
  const body = req.body;
  try {
    const success = ownerSigninValidator.safeParse(body);
    if (!success.success) {
      return res.status(403).json({ msg: "data not in format" });
    }
    const response = await owner.findOne({
      email: body.email,
    });
    if (!response || response == null) {
      return res.status(401).json({ msg: "owner not found" });
    }
    const compare = await bcrypt.compare(body.password, response.password);
    if (!compare) {
      return res.status(401).json({ msg: "incorrect password" });
    }
    const token = jwt.sign(response._id.toHexString(), env.SECRET_KEY);
    console.log(response.name);
    res.json({
      ownername: response.name,
      token: token,
    });
  } catch (error) {
    console.log("error while signing up", error);
    res.status(402).json({ msg: "error while signing up" });
  }
};

export const hotelBookings = async (req, res) => {
  try {
    const hotels = await hotel.find({
      createdBy: req.userId,
    });

    let books =[]

    for(let item=0; item<hotels.length;item++){
          const booking= await bookings.find({hotelId:hotels[item]._id}).populate({
            path:'hotelId',
            select:'hotelName'
          })
          .populate({
            path:'bookedBy',
            select:'name'
          })
          books = books.concat(booking)
    }
   
     
    res.json(books);
  } catch (error) {
    console.log("error while fetching booking of hotel", error);
    res.json("error whil fetching booking of hotel");
  }
};

export const myHotels = async (req, res) => {
  try {
    const hotels = await hotel.find({ createdBy: req.userId });
    res.json({ hotels });
  } catch (e) {
    console.log("error in geting my hotels", e);
    res.status(401).json({
      msg: "error while getting my hotels",
    });
  }
};

import {
  hotelValidator,
  signinValidator,
  signupValidator,
} from "../../config/helpers/validator.js";
import user from "../../config/schema/user.schema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../../../infrastructure/env.js";
import hotel from "../../config/schema/hotel.schema.js";
import bookings from "../../config/schema/booking.schema.js";

export const Signup = async (req, res) => {
  const body = req.body;
  try {
    const success = signupValidator.safeParse(body);
    if (!success.success) {
      return res.status(403).json({ msg: "Data not in format" });
    }
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const check = await user.findOne({ email: body.email });

    if (check) {
      return res.status(401).json({ msg: "user already exist" });
    }

    const response = await user.create({
      name: body.name,
      username: body.username,
      email: body.email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: response._id }, process.env.SECRET_KEY);
    res.status(201).json({
      username: response.username,
      token: token,
    });
  } catch (error) {
    console.log("error while signup", error);
    return res.status(402).json({ msg: "error while signup" });
  }
};

export const Signin = async (req, res) => {
  const body = req.body;
  try {
    const success = signinValidator.safeParse(body);
    if (!success.success) {
      return res.status(403).json({ msg: "data not in format" });
    }
    const response = await user.findOne({
      email: body.email,
    });
    if (!response || response == null) {
      return res.status(401).json({ msg: "user not found" });
    }

    const compare = await bcrypt.compare(body.password, response.password);

    if (!compare) {
      return res.status(401).json({ msg: "incorrect passowrd" });
    }
    const token = jwt.sign( {id: response._id}, env.SECRET_KEY);
    res.json({
      username: response.username,
      token: token,
    });
  } catch (error) {
    console.log("error while signing in", error);
    res.status(402).json({ msg: "error while signing in" });
  }
};

export const myBookings = async (req, res) => {
    
  try {
    // console.log("User ID from request:", req.userId.id);
    const book = await bookings
      .find({ bookedBy: req.userId.id})
      .populate({
        path: "hotelId",
        select: "hotelName area city price image",
      })
      .populate({
        path: "bookedBy",
        select: "name",
      });
    //   console.log("Bookings found:", book);
    res.json({
      bookings: book
    });
  } catch (error) {
    console.log("error while geting my bookings", error);
    res.status(403).json({
      msg: "error while getting my bookings",
    });
  }
};

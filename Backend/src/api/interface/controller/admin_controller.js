import express, { response } from "express";
import bookings from "../../config/schema/booking.schema.js";
import { adminSigninValidator } from "../../config/helpers/validator.js";
import admin from "../../config/schema/admin.schema.js";
import jwt from "jsonwebtoken";
import { accountDeleteMessage, sendWarningMail } from "../../lib/Mailer.js";
import env from "../../../infrastructure/env.js";
import owner from "../../config/schema/owner.schema.js";
import hotel from "../../config/schema/hotel.schema.js";

export const adminSignin = async (req, res) => {
  const body = req.body;
  try {
    const success = adminSigninValidator.safeParse(body);
    if (!success.success) {
      return res.status(403).json({ msg: "input not in format" });
    }
    const response = await admin.findOne({
      username: body.username,
      password: body.password,
    });
    if (!response || response == null) {
      return res.status(403).json({
        msg: "user not found",
      });
    }
    const token = jwt.sign(response._id.toHexString(), env.SECRET_KEY);

    res.json({
      username: response.username,
      token: token,
    });
  } catch (error) {
    b;
    console.log("error while admin signin", error);
    return res.status(403).json("error while signin ");
  }
};

export const AddAdmin = async (req, res) => {
  const body = req.body;

  try {
    const success = adminSigninValidator.safeParse(body);
    if (!success.success) {
      return res.status(403).json({ msg: "input not in format" });
    }

    const admins = await admin.find({});
    if (admins.length === 3) {
      return res.status(401).json({
        msg: "Maximum admin reached",
      });
    }
    const response = await admin.create({
      username: body.username,
      password: body.password,
    });

    const token = await jwt.sign(response._id.toHexString(), env.SECRET_KEY);
    res.json({
      token: token,
    });
  } catch (error) {
    console.log("error while adding admin", error);
    res.status(401).json({
      msg: "error while adding admin",
    });
  }
};

export const AllBookings = async (req, res) => {
  try {
    const response = await bookings.find({}).populate(
        {
            path: 'hotelId',
            select: 'hotelName area city state price image'
        })
        .populate({
            path: "bookedBy",
            select: 'name email'
        })
    res.json(response);
  } catch (error) {
    console.log("error while feting all bookings", error);
    res.status(500).json({
      msg: "error while fetching all bookings",
    });
  }
};
export const AllHotels = async (req, res) => {
  try {
    const response = await hotel.find({});
    res.json({ hotels: response });
  } catch (error) {
    console.log("error while getting all hotels", error);
    res.status(401).json({
      msg: "error while getting hotels",
    });
  }
};
export const deleteHotel = async (req, res) => {
  const body = req.body;
  try {
    const respones = await hotel.findOne({ _id: body.id });
    await hotel.deleteOne({_id: body.id})
    await bookings.deleteMany({
      hotelId: respones._id
    })
    const user = await owner.findOne({
      _id: respones.createdBy
    })
    await accountDeleteMessage(user.email);
    res.json({ msg: "hotel deleted" });
  } catch (error) {
    console.log("error while deleting hotel", error);
    res.status(403).json({
      msg: "errro while deleting hotel",
    });
  }
};
export const sendWarning = async (req, res) => {
  const body = req.body;
  try {
    const user = await owner.findOne({
      _id: body.createdBy,
    });
    await sendWarningMail(user.email);
    res.json({
      msg: "warning send",
    });
  } catch (error) {
    console.log("error while sending warning", error);
    res.status(403).json({
      msg: "error whiel sending warning",
    });
  }
};

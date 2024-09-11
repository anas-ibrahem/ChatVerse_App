import jwt from "jsonwebtoken";
import { Response } from "express";

const generateToken = (userId: string, username: string, res: Response) => {
  const token = jwt.sign({ userId, username }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  res.cookie("token", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days in ms
    httpOnly: true, // prevent XSS cross site scripting attack
    sameSite: "strict", // CSRF cross site request forgery
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};

export default generateToken;

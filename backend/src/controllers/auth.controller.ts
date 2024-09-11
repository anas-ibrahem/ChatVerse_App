import { Request, Response } from "express";
import prisma from "../db/prisma.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req: Request, res: Response) => {
  try {
    const { fullname, username, password, confirmPass, gender } = req.body;

    if (!fullname || !username || !password || !confirmPass || !gender)
      return res.status(400).json({ message: "Please fill in all fields" });

    if (password.length < 6)
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters" });

    if (password !== confirmPass)
      return res
        .status(400)
        .json({ message: "Password & Confirm Fields don't match" });

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (user)
      return res.status(400).json({ message: "Username already exists" });

    const salt = await bcrypt.genSalt(10); // Hashing password salting
    const hashedPassword = await bcrypt.hash(password, salt);

    const maleProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePic = `https://avatar.iran.liara.run//public/girl?username=${username}`;

    const newUser = await prisma.user.create({
      data: {
        fullname,
        username,
        password: hashedPassword,
        gender,
        profilePic: gender == "male" ? maleProfilePic : femaleProfilePic,
      },
    });

    if (newUser) {
      // generate token
      generateToken(newUser.id, newUser.username, res);

      res.status(201).json({
        id: newUser.id,
        fullname: newUser.fullname,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ message: "Something went wrong" });
    }
  } catch (err: any) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(err.message);
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password)
      return res.status(400).json({ message: "Please fill in all fields" });

    const user = await prisma.user.findUnique({
      where: { username },
    });

    if (!user) return res.status(400).json({ message: "Invalid Credentials" });

    const isCorrectPass = await bcrypt.compare(password, user.password);

    if (!isCorrectPass)
      return res.status(400).json({ message: "Invalid Credentials" });

    generateToken(user.id, user.username, res);

    res.status(200).json({
      id: user.id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (err: any) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(err.message);
  }
};

export const logout = async (req: Request, res: Response) => {
  try {
    res.clearCookie("token");
    res.status(200).json({ message: "Logged out Success" });
  } catch (err: any) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(err.message);
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: req.user.id },
    });

    if (!user) return res.status(400).json({ message: "User not found" });

    res.status(200).json({
      id: user.id,
      fullname: user.fullname,
      username: user.username,
      profilePic: user.profilePic,
    });
  } catch (err: any) {
    res.status(500).json({ message: "Internal Server Error" });
    console.log(err.message);
  }
};

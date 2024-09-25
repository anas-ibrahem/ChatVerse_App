import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import prisma from "../db/prisma.js";

interface DecodedToken extends JwtPayload {
  userId: string;
}

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
      };
    }
  }
}

const protectRoute = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;

    if (!decoded) return res.status(401).json({ message: "Unauthorized" });

    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        password: false,
        id: true,
        fullname: true,
        username: true,
        profilePic: true,
      },
    });

    if (!user) return res.status(404).json({ message: "User Not Found" });

    req.user = user;

    next();
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default protectRoute;
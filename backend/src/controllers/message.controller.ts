import { Request, Response } from "express";
import prisma from "../db/prisma.js";

export const sendMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await prisma.conversation.findFirst({
      where: {
        usersIds: {
          hasEvery: [senderId, receiverId],
        },
      },
    });

    if (!conversation) {
      // No conversation found
      conversation = await prisma.conversation.create({
        data: {
          usersIds: {
            set: [senderId, receiverId],
          },
        },
      });
    }

    const newMessage = await prisma.message.create({
      data: {
        conversationId: conversation.id,
        senderId,
        text: message,
      },
    });

    if (newMessage) {
      conversation = await prisma.conversation.update({
        where: {
          id: conversation.id,
        },
        data: {
          messages: {
            connect: {
              id: newMessage.id,
            },
          },
        },
      });
    }
    // TODO Socket will be implemented later

    res.status(200).json(newMessage);
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMessages = async (req: Request, res: Response) => {
  try {
    const { id: receiverId } = req.params;
    const senderId = req.user.id;

    let conversation = await prisma.conversation.findFirst({
      where: {
        usersIds: {
          hasEvery: [senderId, receiverId],
        },
      },
      include: {
        messages: {
          orderBy: {
            createdAt: "asc",
          },
        },
      },
    });

    if (!conversation) {
      return res.status(200).json([]); // No conversation found
    }

    res.status(200).json(conversation.messages);
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// TODO avtually make a friends realtion in db but for now all users are friends
export const getFriendsSideBar = async (req: Request, res: Response) => {
  try {
    const userId = req.user.id;

    const friends = await prisma.user.findMany({
      where: {
        NOT: {
          id: userId,
        },
      },
      select: {
        id: true,
        fullname: true,
        profilePic: true,
      },
    });

    res.status(200).json(friends);
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
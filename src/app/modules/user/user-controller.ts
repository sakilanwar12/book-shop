import { Request, Response } from "express";
import { createUserService } from "./user.service";

export const createUserController = async (req: Request, res: Response) => {
  try {
    const user = await createUserService();
    res.status(201).json({
      message: "User created successfully",
      user,
    });
  } catch (error: any) {
    res.status(500).json({
      message: "Failed to create user",
      error: error.message,
    });
  }
};

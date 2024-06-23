import { Request, Response, NextFunction } from "express";
import UserDto from "../dto/UserDto";

export async function checkUserLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { username, password }: UserDto = req.body;
    const user: { [key: string]: string | number } = {
      username,
      password,
    };
    const missingKeys: string[] = [];
    for (const key in user) {
      if (user[key] === undefined || user[key] === null || user[key] === "") {
        missingKeys.push(key);
      }
    }
    if (missingKeys.length > 0) {
      throw new Error(`Missing keys: ${missingKeys.join(", ")}`);
    }

    next();
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

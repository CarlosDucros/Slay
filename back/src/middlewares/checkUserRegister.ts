import { Request, Response, NextFunction } from "express";
import { userRepo } from "../repositories/user";
import { User } from "../entities/User";
import { credentialRepo } from "../repositories/credential";
import { Credential } from "../entities/Credential";
import UserDto from "../dto/UserDto";

export async function checkUserRegister(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const userData: UserDto = req.body;
    const user: { [key: string]: string | number } = {
      name: userData.name,
      email: userData.email,
      dni_number: userData.dni_number,
      username: userData.username,
      password: userData.password,
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

    const dniComparer: User | null = await userRepo.findOne({
      where: { dni_number: userData.dni_number },
    });
    const emailComparer: User | null = await userRepo.findOne({
      where: { email: userData.email },
    });
    const usernameComparer: Credential | null = await credentialRepo.findOne({
      where: { username: userData.username },
    });
    if (dniComparer || emailComparer || usernameComparer) {
      throw new Error("User data already exists");
    }

    next();
  } catch (error: any) {
    next({ message: "User not created", statusCode: 400 });
    res.status(500).json({ message: error.message });
  }
}

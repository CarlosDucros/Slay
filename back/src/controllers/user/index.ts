import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import {
  getUserByIdService,
  getUsersService,
  loginUserService,
  registerUserService,
} from "../../services/user";
import { User } from "../../entities/User";
import { Credential } from "../../entities/Credential";

const getUsersController = async (req: Request, res: Response) => {
  const users = await getUsersService();
  if (users) res.status(200).json(users);
  else res.status(404).json({ message: "Users not found" });
};

const getUserByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user: User | null = await getUserByIdService(Number(id));
  if (user) res.status(200).json(user);
  else res.status(404).json({ message: "User not found" });
};

const registerUserController = async (req: Request, res: Response) => {
  const user = req.body;
  const registered = await registerUserService(user);

  if (registered) res.status(201).json({ message: "User created" });
};

const loginUserController = async (req: Request, res: Response) => {
  const credentials: Credential = req.body;
  const loged = await loginUserService(credentials);

  if (loged) res.status(201).json({ message: "User loged", loged });
  else res.status(404).json({ message: "Invalid credentials" });
};

export const getUsersControllerAsync = catchAsync(getUsersController);
export const getUserByIdControllerAsync = catchAsync(getUserByIdController);
export const registerUserControllerAsync = catchAsync(registerUserController);
export const loginUserControllerAsync = catchAsync(loginUserController);

import { InsertResult } from "typeorm";
import IUserDto from "../../dto/UserDto";
import { User } from "../../entities/User";
import { userRepo } from "../../repositories/user";

import { checkCredential } from "../credential";
import { CredentialDto } from "../../dto/CredentialDto";

export const getUsersService = async (): Promise<User[]> => {
  try {
    const users = await userRepo.getAll();
    return users;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getUserByIdService = async (id: number): Promise<User | null> => {
  try {
    const user = await userRepo.getById(id);
    return user;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const registerUserService = async (
  userData: IUserDto
): Promise<User | InsertResult> => {
  try {
    const user = await userRepo.createUser(userData);

    return user;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const loginUserService = async (
  credentials: CredentialDto
): Promise<number | undefined> => {
  try {
    const checkedCredentials = await checkCredential(credentials);
    return checkedCredentials;
  } catch (error) {
    throw new Error("User not loged");
  }
};

import { AppDataSource } from "../../config";
import IUserDto from "../../dto/UserDto";
import { User } from "../../entities/User";
import { credentialRepo } from "../credential";

export const userRepo = AppDataSource.getRepository(User).extend({
  async getAll() {
    return this.find({
      select: ["id", "name", "email", "birthdate", "dni_number"],
      relations: ["credentials", "appointments"],
    });
  },
  async getById(id: number) {
    return this.findOne({
      where: { id: Number(id) },
      select: ["id", "name", "email", "birthdate", "dni_number"],
      relations: ["credentials", "appointments"],
    });
  },
  async createUser(user: IUserDto) {
    const credentialId: number = await credentialRepo.createCredential({
      username: user.username,
      password: user.password,
    });
    if (typeof credentialId !== "number")
      throw new Error("Credential not created");

    const newUser = await userRepo
      .createQueryBuilder()
      .insert()
      .into(User)
      .values({
        name: user.name,
        email: user.email,
        birthdate: user.birthdate,
        dni_number: user.dni_number,
        credentials: credentialId,
      })
      .execute();

    return newUser;
  },
});

import { AppDataSource } from "../../config";
import { CredentialDto } from "../../dto/CredentialDto";
import { Credential } from "../../entities/Credential";
import { encryptPassword } from "../../utils";

export const credentialRepo = AppDataSource.getRepository(Credential).extend({
  async findByUsername(username: string) {
    return this.findOne({ where: { username }, select: ["id", "password"] });
  },
  async findById(id: number) {
    return this.findOne({
      where: { id },
      select: ["id", "password"],
    });
  },
  async updateCredential(credential: Credential) {
    const hash: string = await encryptPassword(credential.password);
    const updatedCredential = await this.update(credential.id, {
      username: credential.username,
      password: hash,
    });
    return updatedCredential;
  },
  async createCredential(credential: CredentialDto) {
    const hash: string = await encryptPassword(credential.password);
    const newCredentials = await this.save({
      username: credential.username,
      password: hash,
    });
    return newCredentials.id;
  },
  async getAll() {
    return this.find();
  },
});

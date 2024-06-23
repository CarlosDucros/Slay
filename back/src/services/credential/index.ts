import { Credential } from "../../entities/Credential";
import { credentialRepo } from "../../repositories/credential";
import { ICredential } from "../../types/credential";
import { encryptPassword, comparePassword } from "../../utils";

export async function generateCredential({
  username,
  password,
}: Credential): Promise<number> {
  try {
    const hash: string = await encryptPassword(password);
    const credential: Credential = await credentialRepo.create({
      username,
      password: hash,
    });
    await credentialRepo.save(credential);
    return credential.id;
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function checkCredential({
  username,
  password,
}: ICredential): Promise<number | undefined> {
  try {
    const credential = await credentialRepo.findByUsername(username);
    if (!credential) {
      return;
    }
    const isValidate: boolean = await comparePassword(
      password,
      credential.password
    );
    if (isValidate) {
      return credential.id;
    } else {
      return;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
}

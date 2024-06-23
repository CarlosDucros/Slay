import { IAppointment } from "./appointment";
import { ICredential } from "./credential";
import { Request, Response } from "express";
export interface IUser {
  id?: number;
  name: string;
  email: string;
  birthdate: Date;
  dni_number: number;
  appointments: IAppointment[];
  credentialsId: ICredential["id"];
}

export type AsyncController = (req: Request, res: Response) => Promise<void>;

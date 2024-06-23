import { NextFunction, Response, Request } from "express";
import { Status } from "../entities/Appointment";
import AppointmentDto from "../dto/AppointmentDto";
import { userRepo } from "../repositories/user";
import { appointmentRepo } from "../repositories/appointment";

export async function checkAppointments(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const appointmentsData: AppointmentDto = req.body;

    const userValidate = await userRepo.getById(appointmentsData.user);

    if (!userValidate) res.status(404).json({ message: "Non-existent user" });

    const appointment: { [key: string]: string | Date | Status | number } = {
      time: appointmentsData.time,
      date: appointmentsData.date,
      description: appointmentsData.description,
      user: appointmentsData.user,
    };

    const missingKeys: string[] = [];
    for (const key in appointment) {
      if (
        appointment[key] === undefined ||
        appointment[key] === null ||
        appointment[key] === ""
      ) {
        missingKeys.push(key);
      }
    }

    if (missingKeys.length > 0) {
      throw new Error(`Missing keys: ${missingKeys.join(", ")}`);
    }
    next();
  } catch (error: any) {
    next({ message: "Appointment not created" });
    res.status(400).json({ message: error.message });
  }
}

export const checkCancelAppointment = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;

    const userValidate = await appointmentRepo.getById(Number(id));

    if (!userValidate) throw Error;
    next();
  } catch (error: any) {
    next("Non-existent appointment");
    res.status(404).json({ message: "Non-existent appointment" });
  }
};

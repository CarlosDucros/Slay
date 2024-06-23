import { InsertResult, UpdateResult } from "typeorm";
import AppointmentDto from "../../dto/AppointmentDto";
import { Appointment } from "../../entities/Appointment";
import { appointmentRepo } from "../../repositories/appointment";

export const getAppointmentsService = async (): Promise<
  Appointment[] | undefined
> => {
  try {
    const appointments: Appointment[] = await appointmentRepo.getAll();

    if (appointments.length > 0) {
      return appointments;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const getAppointmentService = async (
  id: number
): Promise<Appointment | undefined> => {
  try {
    const appointment: Appointment | null = await appointmentRepo.getById(id);
    if (appointment) {
      return appointment;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const createAppointmentService = async (
  apptData: AppointmentDto
): Promise<Appointment | InsertResult | undefined> => {
  try {
    const newAppointment = await appointmentRepo.createAppointment(apptData);
    if (newAppointment) {
      return newAppointment;
    }
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const cancelAppointmentService = async (
  id: string
): Promise<UpdateResult | undefined> => {
  try {
    return await appointmentRepo.cancelAppointment(Number(id));
  } catch (error: any) {
    throw new Error(error.message);
  }
};

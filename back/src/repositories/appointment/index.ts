import { InsertResult, UpdateResult } from "typeorm";
import { AppDataSource } from "../../config";
import AppointmentDto from "../../dto/AppointmentDto";
import { Appointment, Status } from "../../entities/Appointment";

export const appointmentRepo = AppDataSource.getRepository(Appointment).extend({
  async getAll(): Promise<Appointment[]> {
    return this.createQueryBuilder("appointment")
      .select([
        "appointment.id",
        "appointment.date",
        "appointment.time",
        "appointment.description",
        "appointment.status",
        "user.id",
        "user.name",
      ])
      .leftJoin("appointment.user", "user")
      .getMany();
  },
  async getById(id: number): Promise<Appointment | null> {
    return this.createQueryBuilder("appointment")
      .select([
        "appointment.id",
        "appointment.date",
        "appointment.time",
        "appointment.description",
        "appointment.status",
        "user.id",
        "user.name",
      ])
      .leftJoin("appointment.user", "user")
      .where("appointment.id = :id", { id })
      .getOne();
  },
  async createAppointment(appointment: AppointmentDto) {
    const newAppointment: AppointmentDto = {
      date: appointment.date,
      time: appointment.time,
      description: appointment.description,
      status: appointment.status,
      user: appointment.user,
    };
    await appointmentRepo
      .createQueryBuilder()
      .insert()
      .into(Appointment)
      .values({
        date: appointment.date,
        time: appointment.time,
        description: appointment.description,
        status: appointment.status,
        user: appointment.user,
      })
      .execute();

    return newAppointment;
  },
  async cancelAppointment(id: number) {
    const appt = await this.getById(id);
    if (!appt) {
      return;
    }

    const updateAppointment: UpdateResult = await appointmentRepo
      .createQueryBuilder()
      .update(Appointment)
      .set({
        status: Status.CANCELLED,
      })
      .where("id = :id", { id })
      .execute();

    return updateAppointment;
  },
});

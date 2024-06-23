import { Request, Response } from "express";
import {
  cancelAppointmentService,
  createAppointmentService,
  getAppointmentService,
  getAppointmentsService,
} from "../../services/appointment";
import AppointmentDto from "../../dto/AppointmentDto";
import catchAsync from "../../utils/catchAsync";
import { Appointment } from "../../entities/Appointment";

const getAllAppointmentController = async (req: Request, res: Response) => {
  const appointments = await getAppointmentsService();

  if (appointments) res.status(200).json(appointments);
  else res.status(404).json({ message: "Appointments not found" });
};

const getAppointmentByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const appointment: Appointment | undefined = await getAppointmentService(
    Number(id)
  );
  if (appointment) res.status(200).json(appointment);
  else res.status(404).json({ message: "Appointment not found" });
};

const postAppointmentController = async (req: Request, res: Response) => {
  const appointment: AppointmentDto = req.body;
  const newAppointment = await createAppointmentService(appointment);
  if (newAppointment)
    res.status(201).json({
      message: "Appointment successfully created",
      newAppointment,
    });
};

const putAppointmentController = async (req: Request, res: Response) => {
  const { id } = req.params;

  await cancelAppointmentService(id);

  if (id) res.status(201).json({ message: "Appointment cancelled" });
};

export const getAllAppointmentControllerAsync = catchAsync(
  getAllAppointmentController
);
export const getAppointmentByIdControllerAsync = catchAsync(
  getAppointmentByIdController
);
export const postAppointmentControllerAsync = catchAsync(
  postAppointmentController
);
export const putAppointmentControllerAsync = catchAsync(
  putAppointmentController
);

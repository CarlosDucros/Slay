import { Router } from "express";
import {
  getAllAppointmentControllerAsync,
  getAppointmentByIdControllerAsync,
  postAppointmentControllerAsync,
  putAppointmentControllerAsync,
} from "../../controllers/appointment";
import {
  checkAppointments,
  checkCancelAppointment,
} from "../../middlewares/checkAppointments";

const appointmentRouter: Router = Router();

// /appointments/
appointmentRouter.get("/", getAllAppointmentControllerAsync);
//appointments/2
appointmentRouter.get("/:id", getAppointmentByIdControllerAsync);
// /appointments/schedule
appointmentRouter.post(
  "/schedule",
  checkAppointments,
  postAppointmentControllerAsync
);
// /appointments/cancel
appointmentRouter.put(
  "/cancel/:id",
  checkCancelAppointment,
  putAppointmentControllerAsync
);

export default appointmentRouter;

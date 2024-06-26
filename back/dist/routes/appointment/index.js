"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var appointment_1 = require("../../controllers/appointment");
var checkAppointments_1 = require("../../middlewares/checkAppointments");
var appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/", appointment_1.getAllAppointmentControllerAsync);
appointmentRouter.get("/:id", appointment_1.getAppointmentByIdControllerAsync);
appointmentRouter.post("/schedule", checkAppointments_1.checkAppointments, appointment_1.postAppointmentControllerAsync);
appointmentRouter.put("/cancel/:id", checkAppointments_1.checkCancelAppointment, appointment_1.putAppointmentControllerAsync);
exports.default = appointmentRouter;

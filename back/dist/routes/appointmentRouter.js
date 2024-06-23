"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentsController_1 = require("../controllers/appointmentsController");
const appointmentRouter = (0, express_1.Router)();
appointmentRouter.get("/", appointmentsController_1.getAppointment);
appointmentRouter.post("/schedule", appointmentsController_1.createAppointment);
appointmentRouter.put("/cancel/");
exports.default = appointmentRouter;

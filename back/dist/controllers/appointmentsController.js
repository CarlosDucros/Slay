"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancelAppointment = exports.createAppointment = exports.getAppointment = exports.getAppointments = void 0;
const appointmentsService_1 = require("../services/appointmentsService");
const getAppointments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const appointments = yield (0, appointmentsService_1.getAppointmentsService)();
    res.status(200).json(appointments);
});
exports.getAppointments = getAppointments;
const getAppointment = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.getAppointment = getAppointment;
const createAppointment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, time, place, description, status } = req.body;
    const newAppointment = yield (0, appointmentsService_1.createAppointmentService)({
        name,
        time,
        place,
        description,
        status,
    });
    res.status(201).json(newAppointment);
});
exports.createAppointment = createAppointment;
const cancelAppointment = () => __awaiter(void 0, void 0, void 0, function* () { });
exports.cancelAppointment = cancelAppointment;

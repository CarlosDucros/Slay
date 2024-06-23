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
exports.createAppointmentService = exports.getAppointmentService = exports.getAppointmentsService = void 0;
var Status;
(function (Status) {
    Status["REGISTERED"] = "registered";
    Status["CANCELLED"] = "cancelled";
})(Status || (Status = {}));
let appointments = [
    {
        id: 1,
        name: "Carlos",
        time: new Date(),
        place: "Dirección 123",
        description: "Turno medico",
        status: Status.REGISTERED,
    },
];
let id = 1;
const getAppointmentsService = () => __awaiter(void 0, void 0, void 0, function* () {
    return appointments;
});
exports.getAppointmentsService = getAppointmentsService;
const getAppointmentService = () => __awaiter(void 0, void 0, void 0, function* () {
    return appointments[0];
});
exports.getAppointmentService = getAppointmentService;
const createAppointmentService = (appointmentData) => __awaiter(void 0, void 0, void 0, function* () {
    const newAppointment = {
        id,
        name: appointmentData.name,
        time: appointmentData.time,
        place: appointmentData.place,
        description: appointmentData.description,
        status: appointmentData.status,
    };
    appointments.push(newAppointment);
    id++;
    return newAppointment;
});
exports.createAppointmentService = createAppointmentService;

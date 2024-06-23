"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appointments = void 0;
const appointment_1 = require("../../types/appointment");
exports.appointments = [
    {
        id: 1,
        name: "Consulta con el Dr. García",
        time: new Date("2024-05-15T10:00:00"),
        place: "Clínica Central, Consultorio 202",
        description: "Revisión de rutina",
        status: appointment_1.Status.ACTIVE,
        userID: 101,
    },
    {
        id: 2,
        name: "Visita a la terapeuta",
        time: new Date("2024-05-16T15:00:00"),
        place: "Centro de Terapia, Sala 305",
        description: "Sesión de terapia semanal",
        status: appointment_1.Status.CANCELLED,
        userID: 102,
    },
    {
        id: 3,
        name: "Cita con el dentista",
        time: new Date("2024-05-17T09:30:00"),
        place: "Consultorio Dental, Sala 101",
        description: "Limpieza y chequeo dental",
        status: appointment_1.Status.ACTIVE,
        userID: 103,
    },
];

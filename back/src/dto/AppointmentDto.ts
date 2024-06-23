import { Status } from "../entities/Appointment";

class AppointmentDto {
  date: Date;
  time: string;
  description: string;
  status: Status;
  user: number;
}

export default AppointmentDto;

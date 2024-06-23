import { Appointment } from "../entities/Appointment";

class UserDto {
  username: string;
  password: string;
  name: string;
  email: string;
  birthdate: Date;
  dni_number: number;
  appointments: Appointment[];
}

export default UserDto;

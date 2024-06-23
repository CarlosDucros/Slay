export interface IAppointment {
  id?: number;
  name: string;
  time: Date;
  place: string;
  description: string;
  status: Status;
  userID: IUser["id"];
}

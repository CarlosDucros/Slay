import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

export enum Status {
  ACTIVE = "ACTIVE",
  CANCELLED = "CANCELLED",
}

@Entity({
  name: "appointment",
})
export class Appointment {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({ type: "time" })
  time: string;
  @Column({ type: "date" })
  date: Date;
  @Column({ type: "text" })
  description: string;
  @Column({ type: "enum", enum: Status, default: Status.ACTIVE })
  status: Status;
  @ManyToOne(() => User, (user) => user.appointments)
  @JoinColumn({ name: "userId" })
  user: User | number;
}

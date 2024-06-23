import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Appointment } from "./Appointment";
import { Credential } from "./Credential";

@Entity({ name: "users" })
export class User {
  @PrimaryGeneratedColumn()
  id?: number;
  @Column({
    length: 100,
  })
  name: string;
  @Column({ unique: true, type: "varchar", length: 200 })
  email: string;
  @Column({ type: "date", default: new Date() })
  birthdate: Date;
  @Column({ unique: true, type: "int" })
  dni_number: number;
  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];
  @OneToOne(() => Credential)
  @JoinColumn({ name: "credentialsId" })
  credentials: Credential | number;
}

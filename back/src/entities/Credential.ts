import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({
  name: "credential",
})
export class Credential {
  @PrimaryGeneratedColumn({ type: "int" })
  id: number;
  @Column({ unique: true, type: "varchar", length: 50 })
  username: string;
  @Column({ type: "text", select: false })
  password: string;
}

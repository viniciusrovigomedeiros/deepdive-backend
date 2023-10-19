import { Entity, Column, PrimaryColumn } from "typeorm";
import IUser from "../interfaces/IUser";

@Entity("tb_users")
export default class UserEntity implements IUser {
  constructor(id: string, name: string, email: string, password: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  @PrimaryColumn("varchar", { length: 100, nullable: false })
  id: string;

  @Column("varchar", { length: 100, nullable: false })
  name: string;

  @Column("varchar", { length: 100, nullable: false })
  email: string;

  @Column("varchar", { length: 100, nullable: false })
  password: string;
}

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  familyname: string;

  @Column()
  emailAddress: string;

  @Column({ length: 128 })
  password: string;

  @Column()
  birthday: Date;

  @UpdateDateColumn()
  updated: Date;

  @CreateDateColumn()
  created: Date;

}
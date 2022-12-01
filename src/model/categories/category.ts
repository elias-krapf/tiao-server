import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../users/user";
import { Task } from "../tasks/task";

@Entity()
export class Category {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => User, {cascade: true})
  @JoinTable()
  owner: User;

  @ManyToMany(() => Task, { cascade: true })
  @JoinTable()
  tasks: Task[];

  @ManyToMany(() => User, { cascade: true })
  @JoinTable()
  users: User[];

}
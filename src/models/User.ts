import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('user')
export default class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({length: 100})
  name: string;

  @Column()
  age: number;
  
  @CreateDateColumn({name: 'created_At'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_At'})
  updatedAt: Date;
}
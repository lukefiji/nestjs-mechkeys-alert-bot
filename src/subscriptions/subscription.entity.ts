import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  Column
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'typeorm';
import { User } from '../users/user.entity';

@Entity()
export class Subscription extends BaseEntity {
  @PrimaryColumn()
  @IsNotEmpty()
  keyword: string;

  @Column()
  @IsNotEmpty()
  id: string;

  @PrimaryColumn()
  @IsNotEmpty()
  username: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(
    type => User,
    user => user.subscriptions,
    { eager: false }
  )
  user: User;
}

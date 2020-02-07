import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  Column,
  Unique
} from 'typeorm';
import { IsNotEmpty, IsDate } from 'class-validator';
import { BaseEntity } from 'typeorm';
import { User } from '../users/user.entity';
import { Match } from '../matches/match.entity';

@Entity()
@Unique(['keyword', 'username'])
export class Subscription extends BaseEntity {
  @PrimaryColumn()
  @IsNotEmpty()
  username: string;

  @PrimaryColumn()
  @IsNotEmpty()
  keyword: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @ManyToOne(
    type => User,
    user => user.subscriptions,
    { eager: false }
  )
  user: User;

  @OneToMany(
    type => Match,
    match => match.subscription,
    { eager: true }
  )
  matches: Match[];
}

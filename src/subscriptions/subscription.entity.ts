import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  ManyToOne,
  Column
} from 'typeorm';
import { IsNotEmpty, IsDate } from 'class-validator';
import { BaseEntity } from 'typeorm';
import { User } from '../users/user.entity';
import { Match } from '../matches/match.entity';

@Entity()
export class Subscription extends BaseEntity {
  @PrimaryColumn()
  @IsNotEmpty()
  keyword: string;

  @PrimaryColumn()
  @IsNotEmpty()
  username: string;

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
    match => match.keyword,
    { eager: true }
  )
  matches: Match[];
}

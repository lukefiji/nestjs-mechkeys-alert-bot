import {
  Entity,
  Unique,
  BaseEntity,
  Column,
  OneToMany,
  CreateDateColumn,
  PrimaryColumn
} from 'typeorm';
import { Subscription } from '../subscriptions/subscription.entity';
import { IsDate } from 'class-validator';
import { Match } from '../matches/match.entity';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryColumn()
  username: string;

  @Column()
  urlHash: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @OneToMany(
    type => Match,
    match => match.user,
    { eager: true }
  )
  user: User;

  @OneToMany(
    type => Subscription,
    subscripton => subscripton.username,
    // Get subsciptions when we retrieve a user
    { eager: true }
  )
  subscriptions: Subscription[];
}

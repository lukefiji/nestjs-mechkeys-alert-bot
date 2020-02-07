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
import { IsDate, IsNotEmpty } from 'class-validator';
import { Match } from '../matches/match.entity';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryColumn()
  @IsNotEmpty()
  username: string;

  @Column()
  @IsNotEmpty()
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
    subscripton => subscripton.user,
    // Get subsciptions when we retrieve a user
    { eager: true }
  )
  subscriptions: Subscription[];
}

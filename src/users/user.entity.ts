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

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryColumn()
  username: string;

  @Column()
  urlHash: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(
    type => Subscription,
    subscripton => subscripton.username,
    // Get subsciptions when we retrieve a user
    { eager: true }
  )
  subscriptions: Subscription[];
}

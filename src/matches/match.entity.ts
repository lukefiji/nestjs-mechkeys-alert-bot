import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  ManyToOne,
  Column,
  OneToMany
} from 'typeorm';
import { IsNotEmpty, IsDate } from 'class-validator';
import { BaseEntity } from 'typeorm';
import { Post } from '../posts/post.entity';
import { Subscription } from '../subscriptions/subscription.entity';
import { User } from '../users/user.entity';

@Entity()
export class Match extends BaseEntity {
  @PrimaryColumn()
  @IsNotEmpty()
  keyword: string;

  @IsNotEmpty()
  @ManyToOne(
    type => User,
    user => user.username
  )
  user: User;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @ManyToOne(
    type => Post,
    post => post.id,
    { eager: false }
  )
  post: Post;

  @ManyToOne(
    type => Subscription,
    subscription => subscription.matches,
    { eager: false }
  )
  subcription: Subscription;
}

import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToOne,
  ManyToOne,
  Column
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'typeorm';
import { Post } from '../posts/post.entity';

@Entity()
export class Match extends BaseEntity {
  @PrimaryColumn()
  @IsNotEmpty()
  keyword: string;

  @PrimaryColumn()
  @IsNotEmpty()
  username: string;

  @Column()
  @IsNotEmpty()
  postId: string;

  @CreateDateColumn()
  createdAt: Date;
}

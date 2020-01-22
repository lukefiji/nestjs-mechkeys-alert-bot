import {
  PrimaryColumn,
  Column,
  Entity,
  CreateDateColumn,
  BaseEntity
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Post extends BaseEntity {
  @PrimaryColumn()
  @IsNotEmpty()
  id: string;

  @Column()
  @IsNotEmpty()
  url: string;

  @Column()
  @IsNotEmpty()
  title: string;

  @CreateDateColumn()
  createdAt: Date;
}

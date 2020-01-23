import {
  PrimaryColumn,
  Column,
  Entity,
  CreateDateColumn,
  BaseEntity,
  OneToMany
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { Match } from '../matches/match.entity';

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

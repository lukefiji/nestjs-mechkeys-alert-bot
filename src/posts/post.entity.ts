import {
  PrimaryColumn,
  Column,
  Entity,
  CreateDateColumn,
  BaseEntity,
  OneToMany
} from 'typeorm';
import { IsNotEmpty, IsDate } from 'class-validator';
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
  @IsDate()
  createdAt: Date;

  @OneToMany(
    type => Match,
    match => match.post
  )
  matches: Match[];
}

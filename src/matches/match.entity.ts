import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';
import { BaseEntity } from 'typeorm';

@Entity()
export class Match extends BaseEntity {
  @PrimaryColumn()
  @IsNotEmpty()
  keyword: string;

  @PrimaryColumn()
  @IsNotEmpty()
  username: string;

  @CreateDateColumn()
  createdAt: Date;
}

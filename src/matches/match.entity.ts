import {
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  CreateDateColumn
} from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Match {
  @PrimaryColumn()
  @IsNotEmpty()
  keyword: string;

  @PrimaryColumn()
  @IsNotEmpty()
  username: string;

  @CreateDateColumn()
  createdAt: string;
}

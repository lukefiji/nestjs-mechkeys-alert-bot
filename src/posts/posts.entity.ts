import { PrimaryColumn, Column, Entity, CreateDateColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Post {
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
  createdAt: string;
}

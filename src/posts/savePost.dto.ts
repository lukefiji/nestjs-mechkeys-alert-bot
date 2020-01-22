import { IsNotEmpty } from 'class-validator';

export class SavePostDto {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  url: string;

  @IsNotEmpty()
  title: string;
}

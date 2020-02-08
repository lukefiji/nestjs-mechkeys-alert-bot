import { IsNotEmpty } from 'class-validator';

export class SaveUserDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  uuid: string;
}

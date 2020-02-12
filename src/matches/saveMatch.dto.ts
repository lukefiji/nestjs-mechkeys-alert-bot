import { IsNotEmpty } from 'class-validator';
import { User } from '../users/user.entity';
export class SaveMatchDto {
  @IsNotEmpty()
  keyword: string;

  @IsNotEmpty()
  user: User;
}

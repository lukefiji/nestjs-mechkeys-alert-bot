import { IsNotEmpty } from 'class-validator';

export class SaveSubscriptionDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  keyword: string;
}

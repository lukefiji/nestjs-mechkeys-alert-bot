import { IsNotEmpty } from 'class-validator';
import snoowrap from 'snoowrap';

export class SaveSubscriptionDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  keyword: string;
}

import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { User } from './user.entity';
import { SaveUserDto } from './saveUser.dto';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async findUser(username: string): Promise<User> {
    return this.userRepository.findUser(username);
  }

  async saveUser(saveUserDto: SaveUserDto): Promise<User> {
    return this.userRepository.saveUser(saveUserDto);
  }
}

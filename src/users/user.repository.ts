import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { SaveUserDto } from './saveUser.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async saveUser(saveUserDto: SaveUserDto) {
    this.saveUser(saveUserDto);
  }

  async getUser() {}
}

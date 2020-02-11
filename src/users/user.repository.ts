import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { SaveUserDto } from './saveUser.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findUser(username): Promise<User> {
    return await this.findOne({ username });
  }

  async saveUser(saveUserDto: SaveUserDto) {
    return await this.saveUser(saveUserDto);
  }

  async getUser() {}
}

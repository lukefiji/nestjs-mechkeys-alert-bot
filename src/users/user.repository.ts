import { EntityRepository, Repository } from 'typeorm';
import nanoid from 'nanoid';
import { User } from './user.entity';
import { SaveUserDto } from './saveUser.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async findUser(username): Promise<User> {
    return await this.findOne({ username });
  }

  async saveUser(saveUserDto: SaveUserDto) {
    const { username } = saveUserDto;
    console.log(username);
    const user = new User();

    user.username = username;
    user.uuid = nanoid();
    user.createdAt = new Date();

    console.log(user);

    return await user.save();
  }
}

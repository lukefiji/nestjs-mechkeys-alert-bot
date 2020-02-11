import { EntityRepository, Repository } from 'typeorm';
import { Subscription } from './subscription.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { SaveSubscriptionDto } from './saveSubscription.dto';
import { UserRepository } from '../users/user.repository';

@EntityRepository(Subscription)
export class SubscriptionRepository extends Repository<Subscription> {
  async getSubscriptionsByUuid(uuid) {
    try {
      this.find({ where: { uuid } });
    } catch (error) {
      console.log(error);
    }
  }

  async saveSubscription(
    saveSubscriptionDto: SaveSubscriptionDto
  ): Promise<Subscription> {
    const { username, keyword } = saveSubscriptionDto;

    const subscription = new Subscription();

    subscription.username = username;
    subscription.keyword = keyword;
    subscription.createdAt = new Date();

    try {
      const found = await this.findOne({ username, keyword });
      if (!found) {
        return await subscription.save();
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }
  }
}

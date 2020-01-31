import { EntityRepository, Repository } from 'typeorm';
import { Subscription } from './subscription.entity';
import { InternalServerErrorException } from '@nestjs/common';
import { SaveSubscriptionDto } from './saveSubscription.dto';

@EntityRepository(Subscription)
export class SubscriptionRepositry extends Repository<Subscription> {
  async getSubscriptions() {}

  async saveSubscription(
    saveSubscriptionDto: SaveSubscriptionDto
  ): Promise<Subscription> {
    const { username, keyword } = saveSubscriptionDto;

    const subscription = new Subscription();

    subscription.username = username;
    subscription.keyword = keyword;
    subscription.createdAt = new Date();

    try {
      // await subscription.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }

    return subscription;
  }
}

import { EntityRepository, Repository } from 'typeorm';
import { Subscription } from './subscription.entity';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Subscription)
export class SubscriptionRepositry extends Repository<Subscription> {
  async getSubscriptions() {}

  async saveSubscription(): Promise<Subscription> {
    const subscription = new Subscription();

    subscription.username = '';
    subscription.keyword = '';
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

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubscriptionRepositry } from './subscription.repository';
import { Subscription } from './subscription.entity';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(SubscriptionRepositry)
    private subscriptionRepository: SubscriptionRepositry
  ) {}

  async saveSubscription(): Promise<Subscription> {
    return await this.subscriptionRepository.saveSubscription();
  }
}

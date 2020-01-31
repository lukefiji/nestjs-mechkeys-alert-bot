import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubscriptionRepositry } from './subscription.repository';
import { Subscription } from './subscription.entity';
import { SaveSubscriptionDto } from './saveSubscription.dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(SubscriptionRepositry)
    private subscriptionRepository: SubscriptionRepositry
  ) {}

  async saveSubscription(
    saveSubscriptionDto: SaveSubscriptionDto
  ): Promise<Subscription> {
    return await this.subscriptionRepository.saveSubscription(
      saveSubscriptionDto
    );
  }
}

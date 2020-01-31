import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubscriptionRepository } from './subscription.repository';
import { Subscription } from './subscription.entity';
import { SaveSubscriptionDto } from './saveSubscription.dto';

@Injectable()
export class SubscriptionsService {
  constructor(
    @InjectRepository(SubscriptionRepository)
    private subscriptionRepository: SubscriptionRepository
  ) {}

  async saveSubscription(
    saveSubscriptionDto: SaveSubscriptionDto
  ): Promise<Subscription> {
    return await this.subscriptionRepository.saveSubscription(
      saveSubscriptionDto
    );
  }
}

import { Controller, Get, Param } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get('/subscriptions/:uuid')
  async getSubscriptionsByUuid(@Param('uuid') uuid) {
    return this.subscriptionsService.getSubscriptionsByUuid(uuid);
  }
}

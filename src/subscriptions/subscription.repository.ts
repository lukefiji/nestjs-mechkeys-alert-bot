import { EntityRepository, Repository } from 'typeorm';
import { Subscription } from './subscription.entity';

@EntityRepository(Subscription)
export class SubscriptionRepositry extends Repository<Subscription> {}

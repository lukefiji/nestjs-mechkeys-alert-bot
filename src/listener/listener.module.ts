import { Module } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { PostsModule } from '../posts/posts.module';
import { SubscriptionsModule } from '../subscriptions/subscriptions.module';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [PostsModule, SubscriptionsModule, UsersModule],
  providers: [ListenerService],
  exports: [ListenerService]
})
export class ListenerModule {}

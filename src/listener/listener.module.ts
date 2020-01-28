import { Module } from '@nestjs/common';
import { ListenerService } from './listener.service';
import { PostsModule } from '../posts/posts.module';

@Module({
  imports: [PostsModule],
  providers: [ListenerService],
  exports: [ListenerService]
})
export class ListenerModule {}

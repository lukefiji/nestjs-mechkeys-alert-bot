import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { MatchesModule } from './matches/matches.module';
import typeOrmConfig from './typeorm.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(typeOrmConfig),
    SubscriptionsModule,
    PostsModule,
    MatchesModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}

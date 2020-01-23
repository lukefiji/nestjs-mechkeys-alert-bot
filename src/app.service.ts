import { Injectable, InternalServerErrorException } from '@nestjs/common';
import snoowrap from 'snoowrap';
import { SubmissionStream } from 'snoostorm';
import { PostsService } from './posts/posts.service';

@Injectable()
export class AppService {
  constructor(private readonly postsService: PostsService) {
    this.listenForPosts();
  }

  getHello(): string {
    return 'Hello World!';
  }

  async handleNewPosts(data: any) {
    const { title, url, id } = data;
    const normalizedTitle = title.toLowerCase();
    await this.postsService.savePost({ id, url, title: normalizedTitle });
  }

  listenForPosts(): void {
    // Configure bot
    const bot = new snoowrap({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      userAgent: '/r/mechmarket alert bot'
    });

    const posts = new SubmissionStream(bot, {
      limit: 1,
      pollTime: 2000,
      subreddit: 'mechmarket'
    });

    console.log('Listening for posts');
    posts.on('item', (data: any) => this.handleNewPosts(data));
  }
}

import { Injectable } from '@nestjs/common';
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

  async handlePosts(data: any, searchQuery: string) {
    try {
      const { title, url, id } = data;
      const normalizedTitle = title.toLowerCase();

      // Normalize search query for a regex
      const escapedQuery = searchQuery.replace(
        /[-\/\\^$*+?.()|[\]{}]/g,
        '\\$&'
      );
      const searchRegex = new RegExp(`${escapedQuery}`, 'i');

      if (normalizedTitle.match(searchRegex)) {
        await this.postsService.savePost({ id, url, title });
      }
    } catch (err) {
      console.log(err);
    }
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
      limit: 50,
      pollTime: 2000,
      subreddit: 'mechmarket'
    });

    console.log('Listening for posts');
    posts.on('item', (data: any) => this.handlePosts(data, '[us-ca]'));
  }
}

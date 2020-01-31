import { Injectable } from '@nestjs/common';
import snoowrap from 'snoowrap';
import { SubmissionStream, InboxStream } from 'snoostorm';
import { PostsService } from '../posts/posts.service';

@Injectable()
export class ListenerService {
  bot: snoowrap;

  constructor(private readonly postsService: PostsService) {
    this.bot = new snoowrap({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
      userAgent: '/r/mechmarket alert bot'
    });

    this.listenForPosts();
    this.listenForSubscriptions();
  }

  async handleNewMessages(data: any) {
    console.log(JSON.stringify(data));
    const { id, title, subject, body, author } = data;
  }

  async handleNewPosts(data: any) {
    const { title, url, id } = data;
    const normalizedTitle = title.toLowerCase();
    const savedPost = await this.postsService.savePost({
      id,
      url,
      title: normalizedTitle
    });
    console.log(savedPost);
  }

  listenForPosts(): void {
    const posts = new SubmissionStream(this.bot, {
      subreddit: 'mechmarket',
      limit: 1
    });

    console.log('Listening for posts');
    try {
      posts.on('item', (data: any) => this.handleNewPosts(data));
    } catch (error) {
      console.log(error);
    }
  }

  listenForSubscriptions(): void {
    const messages = new InboxStream(this.bot, {
      filter: 'inbox',
      pollTime: parseInt(process.env.INBOX_POLL_TIME, 10),
      limit: 1
    });

    console.log('Listening for messages');
    try {
      messages.on('item', (data: any) => this.handleNewMessages(data));
    } catch (error) {
      console.log(error);
    }
  }
}

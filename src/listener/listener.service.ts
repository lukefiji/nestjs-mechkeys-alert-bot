import { Injectable } from '@nestjs/common';
import snoowrap from 'snoowrap';
import { SubmissionStream, InboxStream } from 'snoostorm';
import { PostsService } from '../posts/posts.service';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';
import yargsParser from 'yargs-parser';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.entity';

@Injectable()
export class ListenerService {
  bot: snoowrap;

  constructor(
    private readonly postsService: PostsService,
    private readonly subscriptionsService: SubscriptionsService,
    private readonly usersService: UsersService
  ) {
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
    const { id, title, subject, body, author, parent_id } = data;

    // Use subject if a new message, and body if it is a reply
    const message = parent_id === null ? subject : body;
    const args = yargsParser(message);

    const { keyword } = args;
    console.log({ message, args, keyword });

    const username = author.name;
    let user: User = await this.usersService.findUser(username);

    // If user doesn't exist, create a new one
    if (!user) {
      user = await this.usersService.saveUser({ username });
    }

    if (keyword) {
      const newSubscription = await this.subscriptionsService.saveSubscription({
        username,
        keyword
      });

      if (newSubscription) {
        this.bot
          .getMessage(id)
          .reply(`I have received your keyword: ${keyword}`);
      }
    }
  }

  async handleNewPosts(data: any) {
    const { title, url, id } = data;
    const savedPost = await this.postsService.savePost({
      id,
      url,
      title
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
      pollTime: process.env.INBOX_POLL_TIME
        ? parseInt(process.env.INBOX_POLL_TIME, 10)
        : 5000,
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

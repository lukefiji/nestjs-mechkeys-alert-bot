import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  listenForPosts(): void {
    console.log('Listening for posts');
  }
}

import { Controller, Get } from '@nestjs/common';
import { PostsService } from './posts.service';
import { Post } from './post.entity';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  async getPosts(): Promise<Post[]> {
    return await this.postsService.getPosts();
  }
}

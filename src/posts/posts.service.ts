import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';
import { SavePostDto } from './savePost.dto';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(PostRepository)
    private postRepository: PostRepository
  ) {}

  async getPosts(): Promise<Post[]> {
    return this.postRepository.getPosts();
  }

  async savePost(savePostDto: SavePostDto): Promise<Post> {
    return await this.postRepository.savePost(savePostDto);
  }
}

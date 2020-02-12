import { Repository, EntityRepository } from 'typeorm';
import { Post } from './post.entity';
import { SavePostDto } from './savePost.dto';
import { InternalServerErrorException } from '@nestjs/common';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  async getPosts(): Promise<Post[]> {
    return this.find();
  }

  async savePost(savePostDto: SavePostDto): Promise<Post> {
    const { id, url, title } = savePostDto;

    const post = new Post();
    post.id = id;
    post.url = url;
    post.title = title;
    post.createdAt = new Date();

    try {
      await post.save();
    } catch (error) {
      console.log(error);
      throw new InternalServerErrorException();
    }

    return post;
  }
}

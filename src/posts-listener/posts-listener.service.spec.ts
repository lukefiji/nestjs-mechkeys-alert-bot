import { Test, TestingModule } from '@nestjs/testing';
import { PostsListenerService } from './posts-listener.service';

describe('PostsListenerService', () => {
  let service: PostsListenerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsListenerService],
    }).compile();

    service = module.get<PostsListenerService>(PostsListenerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

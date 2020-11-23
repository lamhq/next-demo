import { Service } from 'typedi';
import { Post } from '../types/post';
import HttpService from './http';

@Service()
export default class PostService {
  constructor(private readonly httpService: HttpService) {}

  async findAllAndCount(): Promise<[number, Post[]]> {
    return [0, []];
  }

  async findOne(slug: string): Promise<Post> {
    console.log(slug);
    return {} as Post;
  }
}

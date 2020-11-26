import { Service } from 'typedi';
import { RES_HEADER_TOTAL_COUNT } from '../constants/pagination';
import { Post } from '../types/post';
import HttpService from './http';

export interface PostQuery {
  offset?: number;
  limit?: number;
  text?: string;
}

@Service()
export default class PostService {
  constructor(private readonly httpService: HttpService) {}

  async findAllAndCount(query?: PostQuery): Promise<[number, Post[]]> {
    const q: PostQuery = {
      offset: 0,
      ...query,
    };
    const resp = await this.httpService.get<Post[]>('/cms/posts', {
      params: q,
    });
    const total = parseInt(resp.headers[RES_HEADER_TOTAL_COUNT], 10);
    return [total, resp.data];
  }

  async findOne(slug: string): Promise<Post> {
    const resp = await this.httpService.get<Post>(`/cms/posts/${slug}`);
    return resp.data;
  }
}

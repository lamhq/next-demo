import { Post } from '../types/post';

export async function findAllAndCount(): Promise<[number, Post[]]> {
  return [0, []];
}

export async function findOne(slug: string): Promise<Post> {
  console.log(slug);
  return null;
}

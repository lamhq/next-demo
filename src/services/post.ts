import { Post } from '../types/post';
import posts from './posts';

export async function getAllPosts(): Promise<Post[]> {
  // return new Array(50).fill(null).map((item, index) => {
  //   return {
  //     id: index.toString(),
  //     title: faker.lorem.sentence(5),
  //     slug: faker.helpers.slugify(),
  //     desc: faker.lorem.sentences(3),
  //     content: faker.lorem.paragraphs(),
  //     image: `https://picsum.photos/id/${index}/200/250`,
  //     status: PostStatus.Active,
  //     createdAt: faker.date.past().toISOString(),
  //     author: `${faker.name.firstName()} ${faker.name.lastName()}`,
  //     authorId: '123',
  //   };
  // });
  return posts as Post[];
}

export async function getPostDetail(slug: string): Promise<Post | undefined> {
  console.log(slug);
  return undefined;
}

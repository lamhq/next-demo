export enum PostStatus {
  Active = 'ACTIVE',
  InActive = 'IN_ACTIVE',
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  desc: string;
  content: string;
  image: string;
  status: PostStatus;
  createdAt: string;
  author: string;
  authorId: string;
}

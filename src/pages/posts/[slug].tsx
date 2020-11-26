import React from 'react';
import Head from 'next/head';
import { GetStaticProps, GetStaticPaths, NextPage } from 'next';
import { AxiosError } from 'axios';
import { getService } from '../../common/utils';
import { MainLayout } from '../../components/layouts';
import { PostService } from '../../services';
import { Post } from '../../types/post';
import { APP_NAME } from '../../config';

interface PostDetailPageProps {
  post: Post;
}

const PostDetailPage: NextPage<PostDetailPageProps> = ({ post }) => {
  return (
    <MainLayout>
      <Head>
        <title>
          {post.title} - {APP_NAME}
        </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="blog-main">
        <h3 className="pb-4 mb-4 font-italic border-bottom">{post.title}</h3>
      </div>
    </MainLayout>
  );
};

export default PostDetailPage;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) {
    throw new Error('Bad request');
  }
  let post;
  try {
    post = await getService(PostService).findOne(params.slug.toString());
  } catch (error) {
    const aerr = error as AxiosError;
    if (aerr.response) {
      switch (aerr.response.status) {
        case 400:
          return {
            notFound: true,
          };
        case 401:
          return {
            redirect: {
              destination: '/login',
              permanent: false,
            },
          };
        default:
          throw error;
      }
    }
    throw error;
  }
  return {
    props: { post },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const [, posts] = await getService(PostService).findAllAndCount({ limit: 1000 });

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));

  // new paths not returned by getStaticPaths
  // will wait for the HTML to be generated,
  // identical to SSR
  return { paths, fallback: 'blocking' };
};

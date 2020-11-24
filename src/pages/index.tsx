import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import { Container } from 'typedi';
import { Post } from '../types/post';
import { PostService } from '../services';
import { MainLayout } from '../components/layouts';

interface HomePageProps {
  posts: Post[];
}

const HomePage: NextPage<HomePageProps> = ({ posts }) => {
  return (
    <MainLayout>
      <Head>
        <title>NextDemo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-4 mb-4 font-italic border-bottom">Latest Posts</h3>
          {posts.length === 0 && <p className="text-center">There&rsquo;re no posts to show.</p>}
          {posts.map((post) => {
            return (
              <div
                key={post.id}
                className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
              >
                <div className="col-auto d-none d-lg-block">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="col p-4 d-flex flex-column position-static">
                  <h3 className="mb-0">{post.title}</h3>
                  <div className="mb-1 text-muted">Nov 12</div>
                  <p className="card-text mb-auto">{post.desc}</p>
                  <Link href="/posts/first-post">
                    <button type="button" className="btn btn-link">
                      Continue reading
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}

          <nav className="blog-pagination">
            <a className="btn btn-outline-primary" href="#">
              Older
            </a>
            <a
              className="btn btn-outline-secondary disabled"
              href="#"
              tabIndex={-1}
              aria-disabled="true"
            >
              Newer
            </a>
          </nav>
        </div>
      </div>
    </MainLayout>
  );
};

HomePage.defaultProps = {
  posts: [],
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const postService = Container.get(PostService);
  const [total, posts] = await postService.findAllAndCount();
  const data = {
    posts,
  };

  // The value of the `props` key will be
  //  passed to the `HomePage` component
  return {
    props: data,
  };
};

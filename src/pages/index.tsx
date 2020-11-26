import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import Link from 'next/link';
import qs from 'qs';

import { Post } from '../types/post';
import { PostService } from '../services';
import { MainLayout } from '../components/layouts';
import { getService } from '../common/utils';

function getQueryValueFromContext(
  context: GetServerSidePropsContext,
  key: string,
  defaultValue = '',
): string {
  if (context.query[key]) {
    return context.query[key] as string;
  }
  return defaultValue;
}

interface HomePageProps {
  query: {
    s: string;
    page: number;
  };
  pageCount: number;
  posts: Post[];
}

const HomePage: NextPage<HomePageProps> = ({ query, posts, pageCount }) => {
  const { page } = query;

  function buildRoute(p = 1, text = ''): string {
    const queryObj: Partial<HomePageProps['query']> = { ...query, page: p, s: text };
    if (queryObj.page === 1) {
      delete queryObj.page;
    }
    if (queryObj.s === '') {
      delete queryObj.s;
    }
    const q = qs.stringify(queryObj);
    let route = '/';
    if (q) {
      route += `?${q}`;
    }
    return route;
  }

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
            {page > 1 && (
              <Link href={buildRoute(page - 1)}>
                <a className="btn btn-outline-primary">Newer</a>
              </Link>
            )}
            {pageCount > page && (
              <Link href={buildRoute(page + 1)}>
                <a className="btn btn-outline-secondary">Older</a>
              </Link>
            )}
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

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (context) => {
  const page = parseInt(getQueryValueFromContext(context, 'page', '1'), 10);
  const text = getQueryValueFromContext(context, 's');
  const limit = 2;
  const [total, posts] = await getService(PostService).findAllAndCount({
    text,
    limit,
    offset: (page - 1) * limit,
  });
  const data = {
    query: {
      s: text,
      page,
    },
    pageCount: Math.ceil(total / limit),
    posts,
  };

  return {
    props: data,
  };
};

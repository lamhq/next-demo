import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import Link from 'next/link';
import MainLayout from '../components/layouts/Main';
import { Post } from '../types/post';
import { getAllPosts } from '../services/post';

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

        {/* /.blog-main */}
        <aside className="col-md-4 blog-sidebar">
          <div className="p-4">
            <h4 className="font-italic">Archives</h4>
            <ol className="list-unstyled mb-0">
              <li>
                <a href="#">March 2014</a>
              </li>
              <li>
                <a href="#">February 2014</a>
              </li>
              <li>
                <a href="#">January 2014</a>
              </li>
              <li>
                <a href="#">December 2013</a>
              </li>
              <li>
                <a href="#">November 2013</a>
              </li>
              <li>
                <a href="#">October 2013</a>
              </li>
              <li>
                <a href="#">September 2013</a>
              </li>
              <li>
                <a href="#">August 2013</a>
              </li>
              <li>
                <a href="#">July 2013</a>
              </li>
              <li>
                <a href="#">June 2013</a>
              </li>
              <li>
                <a href="#">May 2013</a>
              </li>
              <li>
                <a href="#">April 2013</a>
              </li>
            </ol>
          </div>
          <div className="p-4">
            <h4 className="font-italic">Elsewhere</h4>
            <ol className="list-unstyled">
              <li>
                <a href="#">GitHub</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
            </ol>
          </div>
        </aside>
        {/* /.blog-sidebar */}
      </div>
    </MainLayout>
  );
};

HomePage.defaultProps = {
  posts: [],
};

export default HomePage;

export const getStaticProps: GetStaticProps = async (context) => {
  const data = {
    posts: await getAllPosts(),
  };

  // The value of the `props` key will be
  //  passed to the `HomePage` component
  return {
    props: data,
  };
};

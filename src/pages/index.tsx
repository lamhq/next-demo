import React from 'react';
import Head from 'next/head';
import { NextPage } from 'next';
import MainLayout from '../components/layouts/Main';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>NextDemo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="row">
        <div className="col-md-8 blog-main">
          <h3 className="pb-4 mb-4 font-italic border-bottom">Latest Posts</h3>

          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width={200}
                height={250}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="stretched-link">
                Continue reading
              </a>
            </div>
          </div>

          <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div className="col-auto d-none d-lg-block">
              <svg
                className="bd-placeholder-img"
                width={200}
                height={250}
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
                role="img"
                aria-label="Placeholder: Thumbnail"
              >
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" />
                <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                  Thumbnail
                </text>
              </svg>
            </div>
            <div className="col p-4 d-flex flex-column position-static">
              <h3 className="mb-0">Featured post</h3>
              <div className="mb-1 text-muted">Nov 12</div>
              <p className="card-text mb-auto">
                This is a wider card with supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="stretched-link">
                Continue reading
              </a>
            </div>
          </div>

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

export default Home;

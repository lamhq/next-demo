import React from 'react';

const Main: React.FC = ({ children }) => {
  return (
    <>
      <div className="container">
        <header className="blog-header py-3">
          <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4">
              <a className="blog-header-logo text-dark" href="#">
                Logo
              </a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
              <a className="text-muted" href="#" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="mx-3"
                  role="img"
                  viewBox="0 0 24 24"
                  focusable="false"
                >
                  <title>Search</title>
                  <circle cx="10.5" cy="10.5" r="7.5" />
                  <path d="M21 21l-5.2-5.2" />
                </svg>
              </a>
              <a className="btn btn-sm btn-outline-secondary" href="#">
                Sign up
              </a>
            </div>
          </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 text-muted" href="#">
              World
            </a>
            <a className="p-2 text-muted" href="#">
              U.S.
            </a>
            <a className="p-2 text-muted" href="#">
              Technology
            </a>
            <a className="p-2 text-muted" href="#">
              Design
            </a>
            <a className="p-2 text-muted" href="#">
              Culture
            </a>
            <a className="p-2 text-muted" href="#">
              Business
            </a>
            <a className="p-2 text-muted" href="#">
              Politics
            </a>
            <a className="p-2 text-muted" href="#">
              Opinion
            </a>
            <a className="p-2 text-muted" href="#">
              Science
            </a>
            <a className="p-2 text-muted" href="#">
              Health
            </a>
            <a className="p-2 text-muted" href="#">
              Style
            </a>
            <a className="p-2 text-muted" href="#">
              Travel
            </a>
          </nav>
        </div>

        <div className="jumbotron p-4 p-md-5 text-white rounded bg-dark">
          <div className="col-md-6 px-0">
            <h1 className="display-4 font-italic">Title of a longer featured blog post</h1>
            <p className="lead my-3">
              Multiple lines of text that form the lede, informing new readers quickly and
              efficiently about what’s most interesting in this post’s contents.
            </p>
            <p className="lead mb-0">
              <a href="#" className="text-white font-weight-bold">
                Continue reading...
              </a>
            </p>
          </div>
        </div>
      </div>

      <main role="main" className="container">
        {children}
      </main>

      <footer className="blog-footer">
        <p>
          Blog template built for &nbsp;
          <a href="https://getbootstrap.com/">Bootstrap</a>
          &nbsp; by &nbsp;
          <a href="https://twitter.com/mdo">@mdo</a>
        </p>
        <p>
          <a href="#">Back to top</a>
        </p>
      </footer>
    </>
  );
};

export default Main;

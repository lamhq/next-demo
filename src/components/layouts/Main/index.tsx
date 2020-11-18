import React from 'react';
import Header from './Header';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />

        <div className="nav-scroller py-1 mb-2">
          <nav className="nav d-flex justify-content-between">
            <a className="p-2 text-muted" href="#acbd">
              World
            </a>
            <a className="p-2 text-muted" href="#acbd">
              U.S.
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Technology
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Design
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Culture
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Business
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Politics
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Opinion
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Science
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Health
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Style
            </a>
            <a className="p-2 text-muted" href="#acbd">
              Travel
            </a>
          </nav>
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
          <a href="#acbd">Back to top</a>
        </p>
      </footer>
    </>
  );
};

export default Layout;

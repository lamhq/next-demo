import React from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

// https://stackoverflow.com/questions/62243026/expected-server-html-to-contain-a-matching-tag-in-tag
const User = dynamic(() => import('./UserView'), { ssr: false });

const Header: React.FC = () => {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4">
          <Link href="/">
            <a className="blog-header-logo text-dark btn btn-link">Logo</a>
          </Link>
        </div>
        <div className="col-4 d-flex justify-content-end align-items-center">
          <User />
        </div>
      </div>
    </header>
  );
};

export default Header;

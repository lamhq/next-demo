import React from 'react';
import Link from 'next/link';
import User from './UserView';

const Header: React.FC = () => {
  return (
    <header className="blog-header py-3">
      <div className="row flex-nowrap justify-content-between align-items-center">
        <div className="col-4">
          <Link href="/">
            <button type="button" className="blog-header-logo text-dark btn btn-link">
              Logo
            </button>
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

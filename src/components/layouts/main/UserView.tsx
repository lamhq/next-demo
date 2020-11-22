import React from 'react';
import Link from 'next/link';
import { useIdentity } from '../../../common/identity';

const UserPanel: React.FC = () => {
  const [identity] = useIdentity();

  return identity ? (
    <>
      Welcome,&nbsp;
      <Link href="/user/profile">
        <a>
          <strong>{identity.displayName}</strong>
        </a>
      </Link>
    </>
  ) : (
    <Link href="/login">
      <button type="button" className="btn btn-sm btn-outline-secondary">
        Sign in
      </button>
    </Link>
  );
};

export default UserPanel;

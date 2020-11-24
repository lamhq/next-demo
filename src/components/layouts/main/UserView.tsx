import React from 'react';
import Link from 'next/link';
import { useIdentity } from '../../../common/identity';
import AuthService from '../../../services/auth';
import { getService } from '../../../common/utils';

const UserPanel: React.FC = () => {
  const [identity, setIdentity] = useIdentity();

  const handleLogout = () => {
    setIdentity(undefined);
    getService(AuthService).logout();
  };

  return identity ? (
    <>
      Welcome,&nbsp;
      <Link href="/user/profile">
        <a>
          <strong>{identity.displayName}</strong>
        </a>
      </Link>
      <button type="button" className="btn btn-sm btn-link" onClick={handleLogout}>
        (Log out)
      </button>
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

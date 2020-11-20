import React from 'react';
import Link from 'next/link';
import { useIdentity } from '../../../common/identity';
import { logout } from '../../../services/auth';

const UserPanel: React.FC = () => {
  const [identity, setIdentity] = useIdentity();
  const handleLogout = () => {
    setIdentity(undefined);
    logout();
  };

  return identity ? (
    <>
      Welcome,&nbsp;
      <strong>{identity.displayName}</strong>
      <button type="button" className="btn btn-sm btn-link" onClick={handleLogout}>
        <em>(Sign out)</em>
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

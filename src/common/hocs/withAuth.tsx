import React from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useIdentity } from '../identity';

export default function withAuth<T>(PageComponent: NextPage<T>): NextPage<T> {
  const WithAuth: NextPage<T> = (props) => {
    const [identity] = useIdentity();
    const router = useRouter();

    React.useEffect(() => {
      if (!identity) {
        router.push('/login');
      }
    }, [identity]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return identity ? <PageComponent {...props} /> : <p>Redirecting...</p>;
  };

  WithAuth.displayName = 'WithAuth';
  return WithAuth;
}

import React from 'react';
import { useRouter } from 'next/router';
import { useIdentity } from '../identity';

export default function withAuth<T>(Component: React.FC<T>): React.FC<T> {
  const WithAuth: React.FC<T> = (props) => {
    const [identity] = useIdentity();
    const router = useRouter();

    React.useEffect(() => {
      if (!identity) {
        router.push('/login');
      }
    }, [identity]);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return identity ? <Component {...props} /> : <p>Redirecting...</p>;
  };

  WithAuth.displayName = 'WithAuth';
  return WithAuth;
}

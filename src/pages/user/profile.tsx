import React from 'react';
import Head from 'next/head';
import { GetStaticProps, NextPage } from 'next';
import { MainLayout } from '../../components/layouts';
import { withAuth } from '../../common/hocs';
import { logout } from '../../services/auth';
import { useIdentity } from '../../common/identity';

interface ProfilePageProps {
  content: string;
}

const ProfilePage: NextPage<ProfilePageProps> = ({ content }) => {
  const [, setIdentity] = useIdentity();
  const handleLogout = () => {
    setIdentity(undefined);
    logout();
  };
  return (
    <MainLayout>
      <Head>
        <title>NextDemo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{content}</p>
      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleLogout}>
        Sign out
      </button>
    </MainLayout>
  );
};

export default withAuth(ProfilePage);

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      content: 'profile data',
    },
  };
};

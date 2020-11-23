import React from 'react';
import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next';
import { MainLayout } from '../../components/layouts';
import { withAuth } from '../../common/hocs';
import { useIdentity } from '../../common/identity';
import ProfileService from '../../services/profile';
import { User } from '../../types/user';
import AuthService from '../../services/auth';
import { getDIContainer } from '../../common/utils';

const authService = getDIContainer().get(AuthService);

interface ProfilePageProps {
  user: User;
}

const ProfilePage: NextPage<ProfilePageProps> = ({ user }) => {
  const [, setIdentity] = useIdentity();
  const handleLogout = () => {
    setIdentity(undefined);
    authService.logout();
  };

  return (
    <MainLayout>
      <Head>
        <title>NextDemo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <button type="button" className="btn btn-sm btn-outline-secondary" onClick={handleLogout}>
        Sign out
      </button>
    </MainLayout>
  );
};

export default withAuth(ProfilePage);

export const getServerSideProps: GetServerSideProps<ProfilePageProps> = async (context) => {
  const profileService = getDIContainer(context).get(ProfileService);
  const user = await profileService.getProfile();
  return {
    props: {
      user,
    },
  };
};

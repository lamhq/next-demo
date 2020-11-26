import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { MainLayout } from '../../components/layouts';
import { APP_NAME } from '../../config';

const ProfileContent = dynamic(() => import('../../components/ProfileContent'), {
  ssr: false,
});

const ProfilePage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>Profile - {APP_NAME}</title>
      </Head>
      <ProfileContent />
    </MainLayout>
  );
};

export default ProfilePage;

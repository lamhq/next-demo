import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { NextPage } from 'next';
import { MainLayout } from '../../components/layouts';

const ProfilePageContent = dynamic(() => import('../../components/ProfilePageContent'), {
  ssr: false,
});

const ProfilePage: NextPage = () => {
  return (
    <MainLayout>
      <Head>
        <title>NextDemo - Profile</title>
      </Head>
      <ProfilePageContent />
    </MainLayout>
  );
};

export default ProfilePage;

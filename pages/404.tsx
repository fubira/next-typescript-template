import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>404: Not found</title>
      </Head>
      <div>404</div>
    </>
  );
};

export default NotFoundPage;

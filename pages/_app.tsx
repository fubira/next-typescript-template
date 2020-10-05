import React from 'react';
import App from 'next/app';
import Router from 'next/router';
import { Provider as StyletronProvider } from 'styletron-react';

import { styletron, debug } from '../styletron';
import { initGA, logPageView } from '../utils/analytics';
import Head from 'next/head';

export default class MyApp extends App {
  componentDidMount(): void {
    initGA();
    logPageView();

    if (Router.router) {
      Router.router.events.on('routeChangeComplete', logPageView);
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;
    return (
      <StyletronProvider value={styletron} debug={debug} debugAfterHydration>
        <Head>
          <title>next-typescript-template</title>
          <link rel="manifest" href="/static/manifest.json" />
          <meta name="theme-color" content="#FFFFFF" />
          <meta name="description" content="content" />
        </Head>
        <Component {...pageProps} />
      </StyletronProvider>
    );
  }
}

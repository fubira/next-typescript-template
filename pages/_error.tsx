import React, { Fragment } from 'react';
import { NextPageContext } from 'next';
import Index from './index';
import '../css/index.scss';

class Error extends React.Component<{ statusCode: number }> {
  static getInitialProps(
    context: NextPageContext
  ): { statusCode: number | undefined } {
    const { res, err } = context;
    const statusCode = res ? res.statusCode : err ? err.statusCode : undefined;

    return { statusCode };
  }

  getResponse(statusCode: number): JSX.Element {
    switch (statusCode) {
      case 404:
        console.log('Rendering home');
        return <Index />;
        break;

      case 500:
        return <p>An error occurred on the server</p>;
        break;

      default:
        return <p>An error occurred on client</p>;
        break;
    }
  }

  render(): JSX.Element {
    return <Fragment>{this.getResponse(this.props.statusCode)}</Fragment>;
  }
}

export default Error;

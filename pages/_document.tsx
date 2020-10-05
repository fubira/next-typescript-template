import Document, {
  DocumentContext,
  DocumentInitialProps,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';
import { Provider as StyletronProvider } from 'styletron-react';
import { Server, Sheet } from 'styletron-engine-atomic';
import { styletron } from '@/styletron';

declare type MyInitialProps = DocumentInitialProps & {
  stylesheets?: Sheet[];
};

class MyDocument extends Document {
  static async getInitialProps(
    context: DocumentContext
  ): Promise<MyInitialProps> {
    const page = context.renderPage(App => props => (
      <StyletronProvider value={styletron}>
        <App {...props} />
      </StyletronProvider>
    ));

    const stylesheets = (styletron as Server).getStylesheets() || [];
    return { ...page, stylesheets };
  }

  render(): JSX.Element {
    const stylesheets = (this.props as MyInitialProps).stylesheets || [];
    return (
      <Html>
        <Head>
          {stylesheets.map((sheet, i) => (
            <style
              className="_styletron_hydrate_"
              dangerouslySetInnerHTML={{ __html: sheet.css }}
              media={sheet.attrs.media}
              data-hydrate={sheet.attrs['data-hydrate']}
              key={i}
            />
          ))}
        </Head>

        <body dir="ltr">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

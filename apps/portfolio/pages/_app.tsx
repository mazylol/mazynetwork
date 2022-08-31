import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mazylol | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-neutral-400 min-h-screen">
        <main>
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;

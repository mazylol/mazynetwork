import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mazylol | Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="Mazylol" />
        <meta name="description" content="A very idiotic techie that likes to do even more idiotic things." />
        <meta name="keywords" content="programmer, networking, hardware" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
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

import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to portfolio-concept!</title>
      </Head>
      <div className="bg-zinc-200 min-h-screen"><main>
        <Component {...pageProps} />
      </main></div>

    </>
  );
}

export default CustomApp;

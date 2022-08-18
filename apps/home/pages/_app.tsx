import { Navitem } from '@mazynetwork/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Mazylol</title>
      </Head>
      <main className="min-h-screen bg-zinc-800">
        <div className="w-full bg-zinc-700 h-14 flex flex-row top-0 sticky">
          <Navitem name="Home" path="/" />
          <Navitem name="Projects" path="/projects" />
        </div>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;

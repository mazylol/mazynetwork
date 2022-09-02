import { Navitem, Footer } from '@mazynetwork/ui';
import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <Head>
        <title>Mazylol</title>
      </Head>
      <main className="min-h-screen bg-zinc-800">
        <div className="w-full bg-zinc-700 h-14 flex flex-row top-0">
          <Navitem name="Home" path="/" />
          <Navitem name="Blog" path="/blog" />
        </div>
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  );
}

export default CustomApp;

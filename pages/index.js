import Head from 'next/head';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CarouselWrap from '../components/CarouselWrap';

export default function Home() {
  return (
    <div>
      <Head>
        <title>AI-Lens</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NavBar />
      <CarouselWrap />
    </div>
  );
}

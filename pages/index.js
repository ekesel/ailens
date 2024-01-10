import Head from 'next/head';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CarouselWrap from '../components/CarouselWrap';
import SubHeading from '../components/SubHeading';
import CardSet from '../components/CardSet';

import data from '../data.json';

export default function Home() {

  return (
    <div>
      <Head>
        <title>{data?.page_title}</title>
        <link rel="icon" href={data?.favicon_path} />
      </Head>
      <Header title={data?.header?.title}
        phone={data?.header?.phone}
       />
      <NavBar items={data?.navbar} />
      <CarouselWrap />
      <SubHeading />
      <CardSet mediaType={'video'} />
    </div>
  );
}

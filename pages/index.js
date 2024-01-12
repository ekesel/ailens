import Head from 'next/head';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import CarouselWrap from '../components/CarouselWrap';
import SubHeading from '../components/SubHeading';
import CardSet from '../components/CardSet';

import data from '../data.json';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>{data?.page_title}</title>
        <link rel="icon" href={data?.favicon_path} />
      </Head>
      <Header title={data?.header?.title}
        phone={data?.header?.phone}
        location={data?.header?.location}
       />
      <NavBar />
      <CarouselWrap carouselImages={data?.carouselImages} />
      <SubHeading subHeadingSubTitle={data?.subHeadingSubTitle} subHeadingTitle={data?.subHeadingTitle} idKey={data?.subHeadingKey} />
      <CardSet data={data?.cardset1} key={data?.key} />
      <CardSet data={data?.cardset2} key={data?.key} />
      <CardSet data={data?.cardset3} key={data?.key} />
      <CardSet data={data?.cardset4} key={data?.key} />
      <Footer />
    </div>
  );
}

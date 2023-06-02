import HomePageLayout from '@/layouts/HomePageLayout';
import type { NextPageWithLayout } from '@/pages/_app';

const Home: NextPageWithLayout = () => {
  return <h1>Next.js Template</h1>;
};

Home.getLayout = page => {
  return <HomePageLayout>{page}</HomePageLayout>;
};

export default Home;

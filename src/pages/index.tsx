import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-start space-y-4 p-24 ${inter.className}`}
    >
      <h1>Next.js Template</h1>
    </main>
  );
};

export default Home;

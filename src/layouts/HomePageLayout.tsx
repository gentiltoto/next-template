import type React from 'react';

interface HomePageLayoutProps {
  children: React.ReactNode;
}

const HomePageLayout: React.FC<HomePageLayoutProps> = ({ children }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start space-y-4 px-4 py-8 md:px-0">
      <div className="flex w-full max-w-xl flex-col items-center justify-start bg-gray-800 md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
        {children}
      </div>
    </main>
  );
};

export default HomePageLayout;

import { ReactNode } from 'react';
import { Footer } from '@/components/Footer/Footer';
import { Navbar } from '@/components/Navbar/Navbar';

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="w-full h-full min-h-screen grid grid-rows-[96px,1fr,auto] space-y-16 custom-bg">
      <div className="max-w-[1210px] w-full mx-auto mt-5 h-24">
        <Navbar />
      </div>
      <div className="max-w-[1210px] w-full mx-auto">{children}</div>
      <Footer />
    </div>
  );
};

export { RootLayout };

import React, { ReactNode } from 'react';
import Footer from '@/components/dashboard/Footer';
import Sidebar from '@/components/dashboard/Sidebar';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <div className="flex flex-col min-h-screen">
        <Sidebar/>
      <main className="flex-grow">{children}</main>
    </div>
    <Footer/>
    </>
  );
};

export default Layout;

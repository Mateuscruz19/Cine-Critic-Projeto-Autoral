"use client";

//React
import React, { ReactNode } from 'react';
import { useEffect } from 'react';
import Footer from '@/components/dashboard/Footer';
import Sidebar from '@/components/dashboard/Sidebar';
import { getCookie } from 'cookies-next';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    
    const router = useRouter()

    useEffect(() => {
        try {
        const token = getCookie('authorization')
        console.log(token)
        if(!token) throw new Error('Token Inválido');
        } catch (error) {
            toast('Login realizado com sucesso!')
            router.push("/pages/auth");
        }
},[router])

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


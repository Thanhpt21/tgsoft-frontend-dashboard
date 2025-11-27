'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import { AuthProvider } from '@/context/AuthContext';
import Footer from './Footer';
interface AppContentProps {
  children: ReactNode;
}

export default function AppContent({ children }: AppContentProps) {
  const pathname = usePathname();
  const isAdminPage = pathname.startsWith('/admin');
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        {!isAdminPage && <Header/>}
        
        <main className="flex justify-center flex-grow">
          {children}
        </main>

        {!isAdminPage && <Footer/>}
      </div>
    </AuthProvider>
  );
}

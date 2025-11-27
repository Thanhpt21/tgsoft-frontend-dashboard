'use client';

import { ReactNode } from 'react';
import Header from '@/components/layout/Header';
import { AuthProvider } from '@/context/AuthContext';
import Footer from './Footer';
interface AppContentProps {
  children: ReactNode;
}

export default function AppContent({ children }: AppContentProps) {

  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        {<Header/>}
        
        <main className="flex justify-center flex-grow">
          {children}
        </main>

        {<Footer/>}
      </div>
    </AuthProvider>
  );
}

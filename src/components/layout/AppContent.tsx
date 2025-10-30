// src/components/layout/AppContent.tsx
'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
// import { useConfigOne } from '@/hooks/config/useConfigOne';
import { AuthProvider } from '@/context/AuthContext';

interface AppContentProps {
  children: ReactNode;
}

export default function AppContent({ children }: AppContentProps) {
  const pathname = usePathname();
  // const { data: configData, isLoading, isError } = useConfigOne();

  const isAdminPage = pathname.includes('/admin');



  return (
    <AuthProvider>
      <div className="">
        {/* {!isAdminPage && <Header />} */}

        <main className="">
          {children}
        </main>

        {/* {!isAdminPage && configData && <Footer />} */}
      </div>
    </AuthProvider>
  );
}
'use client';

import MainMenu from '@/components/MainMenu';
import MenuLogo from '@/components/MenuLogo';
import MobileMenu from '@/components/MobileMenu';
import useMediaQuery from '@/hooks/use-media-query';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <div className="bg-muted overflow-auto ">
        {isDesktop ? (
          <MainMenu />
        ) : (
          <div className="sticky top-0 left-0 bg-background border-b border-border p-4 px-4 flex items-center justify-between">
            <MenuLogo />
            <MobileMenu />
          </div>
        )}
      </div>
      <div className="overflow-auto px-4">
        <h1>Welcome back!</h1>
        {children}
      </div>
    </div>
  );
}

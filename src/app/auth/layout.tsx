import Header from '@/components/Header';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <div className="flex justify-center w-full h-full mx-auto p-4 max-w-[1200px] flex-1">
        {children}
      </div>
    </div>
  );
}

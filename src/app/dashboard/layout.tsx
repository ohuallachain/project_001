import MainMenu from '@/components/MainMenu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr] h-screen">
      <div className="bg-muted overflow-auto ">
        <MainMenu />
      </div>
      <div className="overflow-auto px-4">
        <h1>Welcome back!</h1>
        {children}
      </div>
    </div>
  );
}

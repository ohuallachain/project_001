'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
}

export default function MenuItem({ children, href }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  // if it's active we make the MenuItem a certain color
  return (
    <Link
      href={href}
      className={cn(
        'block hover:bg-white dark:hover:bg-zinc-700 rounded-md p-2 text-muted-foreground hover:text-foreground',
        isActive &&
          'bg-primary hover:bg-primary dark:hover:bg-primary text-primary-foreground hover:text-primary-foreground'
      )}
    >
      <h5>{children}</h5>
    </Link>
  );
}

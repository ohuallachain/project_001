'use client';

import useMediaQuery from '@/hooks/use-media-query';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItemProps {
  children: React.ReactNode;
  href: string;
  closeMenu?: () => void;
}

export default function MenuItem({ children, href, closeMenu }: MenuItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  const isMobile = useMediaQuery('(max-width: 768px)');

  function handleClick() {
    if (isMobile && closeMenu) {
      closeMenu();
    }
  }

  // if it's active we make the MenuItem a certain color
  return (
    <Link
      href={href}
      onClick={handleClick}
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

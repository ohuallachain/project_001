import { Paths } from '@/paths';
import MenuItem from './MenuItem';
import MenuLogo from './MenuLogo';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { Avatar, AvatarFallback } from './ui/avatar';
import { cn } from '@/lib/utils';
import useMediaQuery from '@/hooks/use-media-query';

interface MainMenuProps {
  className?: string;
  closeMenu?: () => void;
}

export default function MainMenu({ className, closeMenu }: MainMenuProps) {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <nav
      className={cn(
        'flex flex-col justify-between px-4 pt-2 pb-4 h-full',
        className
      )}
    >
      {isDesktop && (
        <header className="dark:border-b-black border-b-zinc-300 border-b-2 pb-4">
          <MenuLogo />
        </header>
      )}

      <div className="flex flex-col gap-4 py-4 grow">
        <MenuItem href={Paths.Dashboard()} closeMenu={closeMenu}>
          Home
        </MenuItem>
        <MenuItem href={Paths.Teams()} closeMenu={closeMenu}>
          Teams
        </MenuItem>
        <MenuItem href={Paths.Employees()} closeMenu={closeMenu}>
          Employees
        </MenuItem>
        <MenuItem href={Paths.Account()} closeMenu={closeMenu}>
          Account
        </MenuItem>
        <MenuItem href={Paths.Settings()} closeMenu={closeMenu}>
          Settings
        </MenuItem>
      </div>

      <footer className="flex items-center justify-between">
        <Link href={Paths.Login()} className="flex gap-4 items-center">
          <Avatar>
            <AvatarFallback className="bg-pink-300 dark:bg-pink-900">
              DH
            </AvatarFallback>
          </Avatar>
          <h6 className="hover:underline">Login</h6>
        </Link>
        <DarkModeToggle />
      </footer>
    </nav>
  );
}

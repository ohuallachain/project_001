import { Paths } from '@/paths';
import MenuItem from './MenuItem';
import MenuLogo from './MenuLogo';
import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { Avatar, AvatarFallback } from './ui/avatar';

export default function MainMenu() {
  return (
    <nav className="flex flex-col justify-between px-4 pt-2 pb-4 h-full">
      <header className="dark:border-b-black border-b-zinc-300 border-b-2 pb-4">
        <MenuLogo />
      </header>

      <div className="flex flex-col gap-4 py-4 grow">
        <MenuItem href={Paths.Dashboard()}>Home</MenuItem>
        <MenuItem href={Paths.Teams()}>Teams</MenuItem>
        <MenuItem href={Paths.Employees()}>Employees</MenuItem>
        <MenuItem href={Paths.Account()}>Account</MenuItem>
        <MenuItem href={Paths.Settings()}>Settings</MenuItem>
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

import Link from 'next/link';
import DarkModeToggle from './DarkModeToggle';
import { Paths } from '@/paths';

export default function Header() {
  return (
    <div className="flex flex-row justify-between items-center gap-4 border-b-2 py-2 px-4">
      <Link href={Paths.Home()}>Home</Link>
      <DarkModeToggle />
    </div>
  );
}

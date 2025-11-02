import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex flex-row items-center gap-1">
        <PersonStandingIcon size={40} className="text-pink-500" />
        <h1>Support Me</h1>
      </div>
      <p>The best dashboard to manage customer support</p>
      <div className="flex flex-row justify-center items-center gap-4">
        <Button className="cursor-pointer" asChild>
          <Link href={'/login'}>Log in</Link>
        </Button>
        <small>or</small>
        <Button variant="outline" className="cursor-pointer" asChild>
          <Link href={'/signup'}>Sign up</Link>
        </Button>
      </div>
    </div>
  );
}

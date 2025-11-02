'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function DarkModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Tooltip>
      <TooltipTrigger
        asChild
        onClick={() => {
          setTheme(resolvedTheme === 'light' ? 'dark' : 'light');
        }}
      >
        <Button variant="outline" className="cursor-pointer">
          <SunIcon className="block dark:hidden" />
          <MoonIcon className="hidden dark:block" />
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <span className="block dark:hidden">Activate dark mode</span>
        <span className="hidden dark:block">Activate light mode</span>
      </TooltipContent>
    </Tooltip>
  );
}

'use client';

import { MenuIcon } from 'lucide-react';
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from './ui/drawer';
import MainMenu from './MainMenu';
import { useState } from 'react';

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <Drawer
      direction="right"
      open={menuOpen}
      onClose={closeMenu}
      onOpenChange={(open) => setMenuOpen(open)}
    >
      <DrawerTrigger asChild>
        <MenuIcon size={40} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader></DrawerHeader>
        <MainMenu closeMenu={closeMenu} />
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

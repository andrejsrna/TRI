'use client';

import { cn } from "@/lib/utils";
import { useLanguage } from '@/components/nav/nav-switcher';
import { Button } from "@/components/ui/button";
import { NavMenu } from "@/components/nav/nav-menu";
import { MobileNav } from "@/components/nav/mobile-nav";
import Link from "next/link";
import Image from "next/image";
import NavSwitcher from "@/components/nav/nav-switcher";

interface NavProps {
  className?: string;
  children?: React.ReactNode;
  id?: string;
}

export const Nav = ({ className, children, id }: NavProps) => {
  const { t } = useLanguage();
  
  return (
    <nav
      className={cn("sticky z-50 top-0 bg-background font-parkinsans", className)}
      id={id}
    >
      <div
        id="nav-container"
        className="max-w-7xl mx-auto py-4 px-6 sm:px-8 flex justify-between items-center"
      >
        <Link
          className="hover:opacity-75 transition-all flex gap-2 items-center"
          href="/"
        >
          <h2 className="sr-only font-parkinsans">{t.menu.logo.srOnly}</h2>
          <Image
            src="/logo.png"
            alt={t.menu.logo.alt}
            className=""
            width={150}
            height={55}
          />
        </Link>
        {children}
        <div className="flex items-center gap-2">
          <NavMenu />
          <Button asChild className="hidden rounded-full bg-primary text-white hover:text-grey-100 sm:flex font-parkinsans">
            <Link href="#mail">{t.menu.joinButton}</Link>
          </Button>
          <MobileNav />
          <NavSwitcher />
        </div>
      </div>
    </nav>
  );
}; 
'use client';

import Link from 'next/link';
import { Home, Wallet, User, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Wallet', url: '/wallet', icon: Wallet },
  { title: 'Notifications', url: '/notifications', icon: Bell },
  { title: 'Profile', url: '/profile', icon: User },
];

export function MobileNav({ user }: { user: any }) {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
      <ul className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <li key={item.title}>
            <Link
              href={item.url}
              className={`
                flex flex-col items-center justify-center gap-1 text-xs
                transition-colors hover:text-blue-500
                ${pathname === item.url ? 'text-blue-500' : 'text-gray-600'}
              `}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

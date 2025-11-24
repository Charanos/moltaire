'use client';

import Link from 'next/link';
import { Home, Wallet, User, Bell, Shield, LogOut } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navItems = [
  { title: 'Home', url: '/', icon: Home },
  { title: 'Wallet', url: '/wallet', icon: Wallet },
  { title: 'Notifications', url: '/notifications', icon: Bell },
  { title: 'Profile', url: '/profile', icon: User },
];

export function Sidebar({ user }: { user: any }) {
  const pathname = usePathname();
  const isAdmin = user?.role === 'admin';

  return (
    <aside className="hidden md:flex flex-col w-64 border-r border-gray-200 h-screen fixed top-0 left-0 bg-white">
      <div className="px-4 py-6">
        <Link href="/">
          <span className="font-bold text-xl">Moltaire</span>
        </Link>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-2">
        <ul className="space-y-1">
          {navItems.map((item) => (
            <li key={item.title}>
              <Link
                href={item.url}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                  hover:bg-gray-100
                  ${pathname === item.url ? 'bg-gray-100 font-semibold' : ''}
                `}
              >
                <item.icon className="w-5 h-5 text-gray-600" />
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          
          {isAdmin && (
            <li>
              <Link
                href="/admin"
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors
                  hover:bg-gray-100
                  ${pathname.startsWith('/admin') ? 'bg-gray-100 font-semibold' : ''}
                `}
              >
                <Shield className="w-5 h-5 text-gray-600" />
                <span>Admin</span>
              </Link>
            </li>
          )}
        </ul>
      </nav>
      
      <div className="px-2 pb-4 border-t border-gray-200 pt-4">
        {/* In a real app, this would be a user dropdown with sign out */}
        <button className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-gray-100 w-full text-left">
          <LogOut className="w-5 h-5 text-gray-600" />
          <span>Sign Out</span>
        </button>
      </div>
    </aside>
  );
}

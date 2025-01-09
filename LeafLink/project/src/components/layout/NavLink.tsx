import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a 
      href={href}
      className="text-blue-800 hover:text-blue-600 transition-colors font-medium"
    >
      {children}
    </a>
  );
}
import React from 'react';

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <a 
      href={href}
      className="block text-blue-800 hover:text-blue-600 transition-colors font-medium"
    >
      {children}
    </a>
  );
}
'use client';

import { ReactNode } from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  children,
  href,
  onClick,
  type = 'button',
}: ButtonProps) {
  const className = `
    px-6 py-2
    text-sm sm:text-base
    rounded-full
    bg-[#634ba6]
    text-white
    hover:bg-[#543b96]
    dark:bg-[#7e66d6]
    dark:hover:bg-[#6b55c2]
    transition
    shadow-md
  `;

  if (href) {
    return (
      <Link href={href}>
        <span className={className}>{children}</span>
      </Link>
    );
  }

  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

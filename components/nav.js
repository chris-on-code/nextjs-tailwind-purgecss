import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-blue-700 px-2 block">
      <ul className="flex">
        <li>
          <Link href="/">
            <a className="block p-4 text-blue-300 hover:text-blue-200">Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

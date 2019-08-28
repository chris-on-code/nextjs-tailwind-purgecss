import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-green-200 p-10 block">
      <ul className="flex">
        <li>
          <Link href="/">
            <a className="block p-2 text-red-600">Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

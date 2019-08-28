import React from 'react';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className="bg-green-200">
      <span>something</span>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

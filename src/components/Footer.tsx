import Link from 'next/link';
import { navLinks } from '@/lib/navLinks';

type NavLink = {
  href: string;
  label: string;
}

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          {navLinks.map((link: NavLink) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
            ))}
        </ul>
      </nav>
    </footer>
  );
}
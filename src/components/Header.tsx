import Link from 'next/link';
import { navLinks } from '@/lib/navLinks';
import styles from '@/styles/components/Header.module.scss';

type NavLink = {
  href: string;
  label: string;
}

export default function Header() {
  return (
    <header className={styles.header}>
      <h1><Link href="/">Test Site</Link></h1>
      <nav>
        <ul className={styles.navStyle}>
          {navLinks.map((link: NavLink) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
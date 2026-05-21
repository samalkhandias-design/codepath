'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import styles from './Navbar.module.css';

const links = [
  { href: '/',         label: 'Главная' },
  { href: '/courses',  label: 'Курсы' },
  { href: '/about',    label: 'О нас' },
  { href: '/contact',  label: 'Контакты' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
          <span className={styles.logoSymbol}>&gt;_</span>
          <span className={styles.logoText}>CodePath</span>
        </Link>

        {/* Desktop nav */}
        <nav className={styles.nav}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <Link href="/courses" className={`btn-primary ${styles.cta}`}>
          Начать учиться
        </Link>

        {/* Burger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ''}`}
          onClick={() => setOpen(v => !v)}
          aria-label="Меню"
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className={styles.mobile}>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/courses" className="btn-primary" onClick={() => setOpen(false)}>
            Начать учиться
          </Link>
        </div>
      )}
    </header>
  );
}

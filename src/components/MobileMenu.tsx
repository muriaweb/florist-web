import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

const navLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Koleksi', href: '/koleksi' },
  { label: 'Tentang Kami', href: '/tentang-kami' },
  { label: 'Kontak', href: '/kontak' },
];

interface Props {
  currentPath?: string;
}

export default function MobileMenu({ currentPath = '/' }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  // Portal content rendered directly into document.body
  const portalContent = mounted ? createPortal(
    <>
      {/* Dark overlay */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          zIndex: 9998,
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Drawer panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          backgroundColor: '#ffffff',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '-8px 0 32px rgba(0, 0, 0, 0.18)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          borderBottom: '1px solid #e3bdbf',
          backgroundColor: '#ffffff',
        }}>
          <span style={{
            fontFamily: "'EB Garamond', serif",
            fontSize: '22px',
            fontWeight: 700,
            color: '#95002a',
          }}>
            Kudus Florist
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Tutup menu"
            style={{
              fontFamily: "'Material Symbols Outlined'",
              fontSize: '24px',
              color: '#5b4041',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '4px',
              lineHeight: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
            }}
          >
            close
          </button>
        </div>

        {/* Nav links */}
        <nav style={{ flex: 1, padding: '24px 16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '13px 16px',
                  borderRadius: '8px',
                  fontFamily: "'Be Vietnam Pro', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textDecoration: 'none',
                  backgroundColor: isActive ? 'rgba(149, 0, 42, 0.09)' : 'transparent',
                  color: isActive ? '#95002a' : '#5b4041',
                  borderLeft: isActive ? '3px solid #95002a' : '3px solid transparent',
                  transition: 'all 0.15s ease',
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div style={{ padding: '0 24px 32px' }}>
          <a
            href="/koleksi"
            onClick={() => setOpen(false)}
            style={{
              display: 'block',
              width: '100%',
              backgroundColor: '#95002a',
              color: '#ffffff',
              padding: '13px 16px',
              borderRadius: '8px',
              fontFamily: "'Be Vietnam Pro', sans-serif",
              fontSize: '14px',
              fontWeight: 600,
              textAlign: 'center',
              textDecoration: 'none',
              boxSizing: 'border-box',
            }}
          >
            Pesan Sekarang
          </a>
        </div>
      </div>
    </>,
    document.body
  ) : null;

  return (
    <>
      {/* Hamburger button — stays inside nav */}
      <button
        onClick={() => setOpen(true)}
        className="md:hidden text-primary"
        aria-label="Buka menu navigasi"
        style={{
          fontFamily: "'Material Symbols Outlined'",
          fontSize: '24px',
          color: '#95002a',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          lineHeight: 1,
          padding: '4px',
        }}
      >
        menu
      </button>

      {/* Portal: rendered into document.body, outside nav */}
      {portalContent}
    </>
  );
}

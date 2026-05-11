import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Accueil', href: '#hero' },
        { name: 'Services', href: '#services' },
        { name: 'UGC', href: '#ugc' },
        { name: 'Contact', href: '#contact' }
    ];

    return (
        <nav
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: isScrolled ? '1rem 0' : '1.5rem 0',
                transition: 'all 0.3s ease',
                zIndex: 1000,
                backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
            }}
        >
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* LOGO area */}
                <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--color-black)', letterSpacing: '1px' }}>
                        ComManue
                    </span>
                </a>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', gap: '2rem', display: 'none' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            style={{
                                fontFamily: 'var(--font-body)',
                                fontWeight: 500,
                                color: 'var(--color-black)',
                                transition: 'color 0.2s ease'
                            }}
                            onMouseEnter={(e) => e.target.style.color = 'var(--color-pink-dark)'}
                            onMouseLeave={(e) => e.target.style.color = 'var(--color-black)'}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Call to action desktop */}
                <a href="#contact" className="btn btn-primary" style={{ display: 'none' }}>
                    Travaillons Ensemble
                </a>

                {/* Mobile menu toggle */}
                <button
                    className="mobile-toggle"
                    style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* CSS for media queries injected here for simplicity, though best in external css usually */}
            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .btn-primary.desktop-only { display: inline-flex !important; }
          .mobile-toggle { display: none !important; }
        }
        
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: white;
          padding: 2rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transform-origin: top;
          transform: scaleY(0);
          opacity: 0;
          transition: all 0.3s ease;
        }
        
        .mobile-menu.open {
          transform: scaleY(1);
          opacity: 1;
        }
        
        .mobile-menu a {
          display: block;
          padding: 1rem 0;
          font-size: 1.2rem;
          font-weight: 600;
          border-bottom: 1px solid var(--color-gray);
        }
      `}</style>

            {/* Mobile Menu Dropdown */}
            <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;

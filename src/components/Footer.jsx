import React from 'react';
import { Instagram, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-white)', padding: '4rem 0 2rem 0' }}>
            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <img
                        src="/manue1.jpg"
                        alt="Logo Manue"
                        style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--color-pink)' }}
                    />
                    <h2 style={{ fontSize: '2rem', letterSpacing: '2px', margin: 0 }}>MANUE</h2>
                </div>

                <p style={{ color: 'var(--color-gray-dark)', textAlign: 'center', maxWidth: '500px' }}>
                    Community Manager Créative & Stratégique. <br />
                    Sublimez votre présence en ligne avec une touche professionnelle et esthétique.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="https://www.instagram.com/com.manue/" target="_blank" rel="noopener noreferrer" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '45px', height: '45px', borderRadius: '50%',
                        backgroundColor: 'var(--color-black-light)', color: 'var(--color-pink)',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-pink)'; e.currentTarget.style.color = 'var(--color-black)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-black-light)'; e.currentTarget.style.color = 'var(--color-pink)'; }}
                    >
                        <Instagram size={20} />
                    </a>

                    <a href="mailto:contact@manue.com" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '45px', height: '45px', borderRadius: '50%',
                        backgroundColor: 'var(--color-black-light)', color: 'var(--color-pink)',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-pink)'; e.currentTarget.style.color = 'var(--color-black)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-black-light)'; e.currentTarget.style.color = 'var(--color-pink)'; }}
                    >
                        <Mail size={20} />
                    </a>

                    {/* Optional LinkedIn */}
                    <a href="#" style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        width: '45px', height: '45px', borderRadius: '50%',
                        backgroundColor: 'var(--color-black-light)', color: 'var(--color-pink)',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-pink)'; e.currentTarget.style.color = 'var(--color-black)'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'var(--color-black-light)'; e.currentTarget.style.color = 'var(--color-pink)'; }}
                    >
                        <Linkedin size={20} />
                    </a>
                </div>

                <div style={{
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'var(--color-black-light)',
                    margin: '2rem 0 1rem 0'
                }}></div>

                <p style={{ color: 'var(--color-gray-dark)', fontSize: '0.9rem' }}>
                    © {new Date().getFullYear()} Manue Community Manager. Tous droits réservés.
                </p>

            </div>
        </footer>
    );
};

export default Footer;

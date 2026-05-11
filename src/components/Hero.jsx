import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            paddingTop: '80px', // Accont for fixed navbar
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'var(--color-pink-light)'
        }}>

            {/* Decorative background circle */}
            <div style={{
                position: 'absolute',
                top: '-10%',
                right: '-5%',
                width: '50vw',
                height: '50vw',
                borderRadius: '50%',
                backgroundColor: 'var(--color-pink)',
                opacity: 0.5,
                zIndex: 0,
                filter: 'blur(100px)'
            }}></div>



            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr)',
                    gap: '4rem',
                    alignItems: 'center'
                }} className="hero-grid">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', order: 2 }}
                        className="hero-text"
                    >
                        <h2 style={{ color: 'var(--color-pink-dark)', fontFamily: 'var(--font-heading)', letterSpacing: '2px', fontSize: '1rem', textTransform: 'uppercase' }}>
                            ✨ Community Manager Freelance
                        </h2>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: 1.1, color: 'var(--color-black)' }}>
                            Faites briller votre <br />
                            <span style={{ color: 'var(--color-pink)' }}>présence en ligne</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--color-gray-dark)', maxWidth: '500px', lineHeight: 1.8 }}>
                            J'accompagne les marques et les créateurs dans le développement
                            de leur communauté. Stratégie, création de contenu et modération :
                            déléguez vos réseaux sociaux en toute confiance.
                        </p>

                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <a href="#services" className="btn btn-primary">Mes Services</a>
                            <a href="#portfolio" className="btn btn-secondary">Voir Mon Travail</a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            order: 1,
                            perspective: '1000px'
                        }}
                        className="hero-image"
                    >
                        <div style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '450px',
                            aspectRatio: '1/1',
                        }}>
                            {/* Profile Photo */}
                            <motion.img
                                src="/photo.jpg"
                                alt="Manue"
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'block';
                                }}
                                style={{
                                    position: 'absolute',
                                    top: '5%',
                                    right: '5%',
                                    width: '80%',
                                    height: '80%',
                                    objectFit: 'cover',
                                    borderRadius: '30px',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    zIndex: 1
                                }}
                            />
                            {/* Fallback pink shape if image is missing */}
                            <motion.div
                                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                style={{
                                    display: 'none',
                                    position: 'absolute',
                                    top: '10%',
                                    right: '10%',
                                    width: '60%',
                                    height: '60%',
                                    borderRadius: '30px',
                                    background: 'linear-gradient(135deg, var(--color-pink) 0%, var(--color-pink-dark) 100%)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                                    zIndex: 1
                                }}
                            />
                            <motion.div
                                animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                style={{
                                    position: 'absolute',
                                    bottom: '10%',
                                    left: '0%',
                                    width: '70%',
                                    height: '40%',
                                    borderRadius: '20px',
                                    background: 'rgba(255, 255, 255, 0.8)',
                                    backdropFilter: 'blur(10px)',
                                    border: '1px solid rgba(255,255,255,0.5)',
                                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                    zIndex: 2,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    padding: '2rem'
                                }}
                            >
                                <span style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.2rem, 6vw, 2rem)', fontWeight: 800, color: 'var(--color-black)' }}>ENGAGEMENT</span>
                                <span style={{ color: 'var(--color-gray-dark)', fontWeight: 600 }}>Ciblé & Authentique</span>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>

            <style>{`
        @media (min-width: 900px) {
          .hero-grid { grid-template-columns: 1fr 1fr !important; }
          .hero-text { order: 1 !important; }
          .hero-image { order: 2 !important; }
        }
      `}</style>

        </section>
    );
};

export default Hero;

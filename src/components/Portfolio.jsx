import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        id: 1,
        title: "Stratégie Instagram - Marque de Beauté",
        category: "Réseaux Sociaux",
        image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=800&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 2,
        title: "Campagne d'Influence - Lancement Produit",
        category: "Influence",
        image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 3,
        title: "Création Reels TikTok - Mode Ethique",
        category: "Création de Contenu",
        image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=800&auto=format&fit=crop",
        link: "#"
    },
    {
        id: 4,
        title: "Audit Digital & Refonte Ligne Éditoriale",
        category: "Stratégie",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
        link: "#"
    }
];

const categories = ["Tous", "Réseaux Sociaux", "Influence", "Création de Contenu", "Stratégie"];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("Tous");
    const filteredProjects = activeCategory === "Tous" ? projects : projects.filter(p => p.category === activeCategory);

    return (
        <section id="portfolio" style={{ backgroundColor: 'var(--color-gray)' }}>
            <div className="container">
                <h2 className="section-title">Mon Portfolio</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-gray-dark)', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                    Découvrez une sélection de mes réalisations. Chaque projet est une opportunité de créer une histoire unique.
                </p>

                {/* Filter Buttons */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '4rem' }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            style={{
                                padding: '0.6rem 1.5rem',
                                borderRadius: '50px',
                                border: 'none',
                                fontFamily: 'var(--font-heading)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                backgroundColor: activeCategory === category ? 'var(--color-black)' : 'var(--color-white)',
                                color: activeCategory === category ? 'var(--color-white)' : 'var(--color-black)',
                                boxShadow: activeCategory === category ? '0 10px 20px rgba(0,0,0,0.1)' : '0 4px 6px rgba(0,0,0,0.05)'
                            }}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Portfolio Grid */}
                <motion.div
                    layout
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="portfolio-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={project.id}
                                style={{
                                    position: 'relative',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    aspectRatio: '1/1',
                                    cursor: 'pointer',
                                    group: 'true'
                                }}
                                className="portfolio-item"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                                    className="portfolio-img"
                                />

                                {/* Hover Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(17, 17, 17, 0.8)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    opacity: 0,
                                    transition: 'opacity 0.3s ease',
                                }} className="portfolio-overlay">

                                    <span style={{
                                        color: 'var(--color-pink)',
                                        fontFamily: 'var(--font-heading)',
                                        fontSize: '0.9rem',
                                        letterSpacing: '1px',
                                        textTransform: 'uppercase',
                                        marginBottom: '0.5rem',
                                        transform: 'translateY(20px)',
                                        transition: 'all 0.3s ease 0.1s'
                                    }} className="portfolio-cat">{project.category}</span>

                                    <h3 style={{
                                        color: 'white',
                                        fontSize: '1.5rem',
                                        marginBottom: '1.5rem',
                                        transform: 'translateY(20px)',
                                        transition: 'all 0.3s ease 0.2s'
                                    }} className="portfolio-title">{project.title}</h3>

                                    <a href={project.link} style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-pink)',
                                        color: 'var(--color-black)',
                                        transform: 'translateY(20px)',
                                        transition: 'all 0.3s ease 0.3s'
                                    }} className="portfolio-link">
                                        <ExternalLink size={20} />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <style>{`
        .portfolio-item:hover .portfolio-img {
          transform: scale(1.1);
        }
        .portfolio-item:hover .portfolio-overlay {
          opacity: 1;
        }
        .portfolio-item:hover .portfolio-cat,
        .portfolio-item:hover .portfolio-title,
        .portfolio-item:hover .portfolio-link {
          transform: translateY(0);
        }
        .portfolio-link:hover {
          background-color: var(--color-white) !important;
          transform: translateY(0) scale(1.1) !important;
        }
      `}</style>
        </section>
    );
};

export default Portfolio;

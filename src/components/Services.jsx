import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Video, BarChart3, Users, Scissors, Lightbulb } from 'lucide-react';

const services = [
    {
        icon: <PenTool size={32} />,
        title: "Création de Contenu",
        description: "Design visuel (posts, stories, reels) et rédaction de captions engageantes qui reflètent votre image de marque."
    },
    {
        icon: <Users size={32} />,
        title: "Gestion de Communauté",
        description: "Animation de vos réseaux sociaux, interaction avec vos abonnés pour créer un véritable lien de confiance."
    },
    {
        icon: <Video size={32} />,
        title: "Création de Contenu UGC",
        description: "Réalisation des vidéos UGC publicitaires pour mettre vos produits en valeur, avec créativité et authenticité."
    },
    {
        icon: <BarChart3 size={32} />,
        title: "Stratégie & Analyse",
        description: "Mise en place d'un calendrier éditorial stratégique et analyse des performances pour optimiser les résultats."
    },
    {
        icon: <Scissors size={32} />,
        title: "Monteuse Vidéo",
        description: "Montage dynamique et percutant de vos vidéos YouTube, Reels et TikTok pour retenir l'attention de votre audience dès les premières secondes."
    },
    {
        icon: <Lightbulb size={32} />,
        title: "Coaching & Formation",
        description: "Un accompagnement sur-mesure de 2 mois pour structurer votre stratégie et gagner en autonomie. Inclus : maîtrise des réseaux sociaux et une session de tournage pour vos premiers contenus."
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { type: 'spring', damping: 20, stiffness: 100 }
    }
};

const Services = () => {
    return (
        <section id="services" style={{ backgroundColor: 'transparent', position: 'relative' }}>


            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Mes Services</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-gray-dark)', maxWidth: '600px', margin: '0 auto 4rem auto' }}>
                    De la première idée à l'analyse des résultats, je m'occupe de tout pour faire décoller votre présence digitale.
                </p>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2.5rem'
                    }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            style={{
                                backgroundColor: 'var(--color-white)',
                                padding: '2.5rem 2rem',
                                borderRadius: '24px',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                                border: '1px solid var(--color-gray)',
                                transition: 'box-shadow 0.3s ease',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 30px 60px rgba(244, 204, 204, 0.3)'}
                            onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.05)'}
                        >
                            {/* Decorative top border */}
                            <div style={{
                                position: 'absolute',
                                top: 0, left: 0, right: 0, height: '4px',
                                backgroundColor: 'var(--color-pink)',
                                transform: 'scaleX(0)',
                                transformOrigin: 'left',
                                transition: 'transform 0.3s ease'
                            }} className="top-border"></div>

                            <div style={{
                                width: '60px', height: '60px',
                                borderRadius: '16px',
                                backgroundColor: 'var(--color-pink-light)',
                                color: 'var(--color-pink-dark)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                marginBottom: '0.5rem'
                            }}>
                                {service.icon}
                            </div>

                            <h3 style={{ fontSize: '1.4rem', color: 'var(--color-black)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--color-gray-dark)', lineHeight: 1.6 }}>{service.description}</p>

                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <style>{`
        div[whileHover]:hover .top-border {
          transform: scaleX(1) !important;
        }
      `}</style>
        </section>
    );
};

export default Services;

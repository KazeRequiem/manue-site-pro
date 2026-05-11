import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <div className="beam-banner" style={{
            padding: '2rem 0',
            fontSize: '1.2rem',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            display: 'flex',
            width: '100vw',
            marginLeft: 'calc(50% - 50vw)' // Ensure full width
        }}>
            <motion.div
                animate={{ x: [0, -2000] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                style={{ display: 'flex', gap: '3rem' }}
            >
                {/* Repeating content for continuous feel */}
                {[...Array(10)].map((_, i) => (
                    <React.Fragment key={i}>
                        <span style={{ fontWeight: 800 }}>✨  GESTION DE COMMUNAUTÉ  ✨</span>
                        <span style={{ fontWeight: 800 }}>✨  STRATÉGIE DIGITALE  ✨</span>
                        <span style={{ fontWeight: 800 }}>✨  CRÉATION DE CONTENU  ✨</span>
                    </React.Fragment>
                ))}
            </motion.div>
        </div>
    );
};

export default Banner;

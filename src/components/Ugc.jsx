import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';

const ugcVideos = [
    {
        id: 1,
        title: "Nouvelles saveurs de Bubble Tea",
        client: "ChaPanda 茶百道",
        videoSrc: "/video_1_ucg.mp4",
    },
    {
        id: 2,
        title: "Promotion Les Premières amours difficiles",
        subtitle: "Akira Momose",
        client: "Éditions VEGA",
        videoSrc: "/video_2_ucg.mp4",
    },
    {
        id: 3,
        title: "Promotion Love Bullet",
        subtitle: "Inee",
        client: "Éditions VEGA",
        videoSrc: "/video_3_ucg.mp4",
    },
    {
        id: 4,
        title: "Promotion Sentenced to Be a Hero",
        subtitle: "Inoue Natsumi",
        client: "Éditions VEGA",
        videoSrc: "/video_4_ucg.mp4",
    }
];

const Ugc = () => {
    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <section id="ugc" style={{ backgroundColor: 'var(--color-pink-light)', position: 'relative' }}>
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <h2 className="section-title">Contenu UGC & Vidéo</h2>
                <p style={{ textAlign: 'center', color: 'var(--color-gray-dark)', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
                    Création de vidéos courtes engageantes et authentiques pour mettre en valeur vos produits.
                    Spécialisée dans les formats pubs pour marques et maisons d'édition.
                </p>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-100px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {ugcVideos.map((video, index) => (
                        <motion.div
                            whileHover={{ y: -10 }}
                            key={video.id}
                            onClick={() => setSelectedVideo(video)}
                            style={{
                                borderRadius: '24px',
                                overflow: 'hidden',
                                backgroundColor: 'var(--color-white)',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                cursor: 'pointer',
                                display: 'flex',
                                flexDirection: 'column',
                                group: 'true'
                            }}
                            className={`ugc-card ${index >= 2 ? 'hide-on-mobile' : ''}`}
                        >
                            {/* Video Thumbnail Area */}
                            <div style={{
                                position: 'relative',
                                aspectRatio: '9/16', /* Typical TikTok/Reels format */
                                overflow: 'hidden',
                                backgroundColor: 'var(--color-black)'
                            }}>
                                <video
                                    src={video.videoSrc}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    className="ugc-img"
                                />
                                {/* Play Button Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundColor: 'rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'background-color 0.3s ease'
                                }} className="ugc-overlay">
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--color-pink)',
                                        color: 'var(--color-white)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transform: 'scale(1)',
                                        transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                    }} className="ugc-play-btn">
                                        <Play fill="currentColor" size={24} style={{ marginLeft: '4px' }} />
                                    </div>
                                </div>
                            </div>

                            {/* Video Info Area */}
                            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <span style={{
                                    color: 'var(--color-pink-dark)',
                                    fontWeight: 700,
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    marginBottom: '0.5rem'
                                }}>{video.client}</span>
                                <h3 style={{ fontSize: '1.1rem', color: 'var(--color-black)', lineHeight: 1.4 }}>{video.title}</h3>
                                {video.subtitle && (
                                    <p style={{ fontSize: '0.9rem', color: 'var(--color-gray-dark)', marginTop: '0.3rem', fontWeight: 500 }}>
                                        {video.subtitle}
                                    </p>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedVideo(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            backgroundColor: 'rgba(17, 17, 17, 0.9)',
                            backdropFilter: 'blur(10px)',
                            WebkitBackdropFilter: 'blur(10px)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '2rem'
                        }}
                        className="ugc-modal-overlay"
                    >
                        <button
                            onClick={() => setSelectedVideo(null)}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'var(--color-white)',
                                border: 'none',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                zIndex: 10000,
                                boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                            }}
                            className="ugc-close-btn"
                        >
                            <X size={24} color="var(--color-black)" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            style={{
                                height: '100%',
                                maxHeight: '90vh',
                                aspectRatio: '9/16',
                                borderRadius: '24px',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                                backgroundColor: '#000'
                            }}
                            className="ugc-modal-video"
                        >
                            <video
                                src={selectedVideo.videoSrc}
                                autoPlay
                                controls
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'contain'
                                }}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        .ugc-card:hover .ugc-img {
          transform: scale(1.05);
        }
        .ugc-card:hover .ugc-overlay {
          background-color: rgba(0,0,0,0.4);
        }
        .ugc-card:hover .ugc-play-btn {
          transform: scale(1.15);
          background-color: var(--color-white);
        }
        @media (max-width: 768px) {
          .hide-on-mobile {
            display: none !important;
          }
          .ugc-modal-overlay {
              padding: 0 !important;
          }
          .ugc-modal-video {
              border-radius: 0 !important;
              max-height: 100vh !important;
              height: 100vh !important;
          }
          .ugc-close-btn {
              top: 1rem !important;
              right: 1rem !important;
              width: 40px !important;
              height: 40px !important;
          }
        }
      `}</style>
        </section>
    );
};

export default Ugc;

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';

const VideoNotification = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showBubble, setShowBubble] = useState(true);
    const videoRef = useRef(null);

    // Stop background video when modal is open, to save resources and avoid audio clash
    useEffect(() => {
        if (isOpen && videoRef.current) {
            videoRef.current.pause();
        } else if (!isOpen && videoRef.current) {
            videoRef.current.play().catch(e => console.log("Autoplay prevented:", e));
        }
    }, [isOpen]);

    return (
        <>
            {/* Floating Widget */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        style={{
                            position: 'fixed',
                            bottom: '30px',
                            right: '30px',
                            zIndex: 100,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            gap: '10px'
                        }}
                    >
                        {/* Notification Bubble */}
                        {showBubble && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, type: "spring", stiffness: 200, damping: 10 }}
                                style={{
                                    backgroundColor: 'var(--color-white)',
                                    padding: '10px 15px',
                                    borderRadius: '15px 15px 0 15px',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                    position: 'relative',
                                    cursor: 'pointer',
                                    border: '1px solid rgba(0,0,0,0.05)'
                                }}
                                onClick={() => setIsOpen(true)}
                            >
                                <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-black)' }}>
                                    👋 Vidéo de présentation !
                                </p>
                                {/* Triangle arrow pointing to the circle */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '-8px',
                                    right: '25px',
                                    width: 0,
                                    height: 0,
                                    borderLeft: '8px solid transparent',
                                    borderRight: '8px solid transparent',
                                    borderTop: '8px solid var(--color-white)',
                                }} />
                            </motion.div>
                        )}

                        {/* Video Circle */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            style={{
                                width: '90px',
                                height: '90px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                border: '3px solid var(--color-pink)',
                                boxShadow: '0 10px 30px rgba(142, 42, 62, 0.3)',
                                cursor: 'pointer',
                                position: 'relative',
                                backgroundColor: 'var(--color-black)'
                            }}
                            onClick={() => {
                                setIsOpen(true);
                                setShowBubble(false);
                            }}
                        >
                            <video
                                ref={videoRef}
                                src="/video_manue.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    pointerEvents: 'none'
                                }}
                            />
                            {/* Overlay Play Icon */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(0,0,0,0.2)'
                            }}>
                                <Play size={28} color="white" fill="white" style={{ opacity: 0.8 }} />
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Video Modal Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="video-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                    >
                        {/* Close button */}
                        <button
                            className="close-video-btn"
                            onClick={() => setIsOpen(false)}
                        >
                            <X size={24} color="var(--color-black)" />
                        </button>

                        {/* Video Container */}
                        <motion.div
                            className="video-modal-container"
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking video
                        >
                            <video
                                src="/video_manue.mp4"
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
            {/* Styles for responsiveness */}
            <style>{`
                .video-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100vw;
                    height: 100vh;
                    background-color: rgba(17, 17, 17, 0.9);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    z-index: 9999;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }
                .video-modal-container {
                    width: 100%;
                    max-width: 1000px;
                    aspect-ratio: 16/9;
                    border-radius: 24px;
                    overflow: hidden;
                    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
                    background-color: #000;
                }
                .close-video-btn {
                    position: absolute;
                    top: 2rem;
                    right: 2rem;
                    background: var(--color-white);
                    border: none;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    z-index: 10000;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.2);
                }

                @media (max-width: 768px) {
                    .video-overlay {
                        padding: 0;
                    }
                    .video-modal-container {
                        aspect-ratio: auto;
                        height: 100vh;
                        border-radius: 0;
                    }
                    .close-video-btn {
                        top: 1rem;
                        right: 1rem;
                        width: 40px;
                        height: 40px;
                    }
                }
            `}</style>
        </>
    );
};

export default VideoNotification;

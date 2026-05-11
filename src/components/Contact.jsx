import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ backgroundColor: 'var(--color-white)' }}>
            <div className="container">
                <h2 className="section-title">Me Contacter</h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true, margin: "-50px" }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'minmax(0, 1fr)',
                        gap: '4rem',
                        marginTop: '4rem'
                    }} className="contact-grid">

                    {/* Contact Info */}
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Prêt(e) à <span style={{ color: 'var(--color-pink-dark)' }}>collaborer</span> ?</h3>
                        <p style={{ color: 'var(--color-gray-dark)', marginBottom: '3rem', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Que vous ayez un projet précis en tête ou que vous souhaitiez
                            simplement discuter de votre stratégie digitale, n'hésitez pas à m'écrire.
                            Je réponds généralement sous 48h.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '50%',
                                    backgroundColor: 'var(--color-pink-light)', color: 'var(--color-pink-dark)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h4>
                                    <a href="mailto:communication.manue@gmail.com" style={{ color: 'var(--color-gray-dark)', transition: 'color 0.2s', fontSize: '1.1rem' }} onMouseEnter={e => e.target.style.color = 'var(--color-pink-dark)'} onMouseLeave={e => e.target.style.color = 'var(--color-gray-dark)'}>
                                        communication.manue@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.5rem' }}>
                                <div style={{
                                    width: '50px', height: '50px', borderRadius: '50%',
                                    backgroundColor: 'var(--color-pink-light)', color: 'var(--color-pink-dark)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                                }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Localisation</h4>
                                    <p style={{ color: 'var(--color-gray-dark)', fontSize: '1.1rem' }}>
                                        Paris | Orléans <br />(Possibilité de déplacements partout en France)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div style={{
                        backgroundColor: 'var(--color-gray)',
                        padding: '3rem',
                        borderRadius: '24px',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
                    }} className="contact-form-container">
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
                            <div style={{ display: 'flex', gap: '1.5rem', flexDirection: 'column' }} className="form-row">
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                                    <label htmlFor="name" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Nom</label>
                                    <input type="text" id="name" placeholder="Votre nom" className="form-input" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1 }}>
                                    <label htmlFor="email" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Email</label>
                                    <input type="email" id="email" placeholder="votre@email.com" className="form-input" />
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="subject" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Sujet</label>
                                <input type="text" id="subject" placeholder="Sujet de votre demande" className="form-input" />
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label htmlFor="message" style={{ fontWeight: 600, fontSize: '0.9rem' }}>Message</label>
                                <textarea id="message" rows="5" placeholder="Parlez-moi de votre projet..." className="form-input" style={{ resize: 'vertical', minHeight: '120px' }}></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', display: 'flex', gap: '10px' }}>
                                Envoyer le message <Send size={18} />
                            </button>
                        </form>
                    </div>

                </motion.div>
            </div>

            <style>{`
        .form-input {
          width: 100%;
          padding: 1rem 1.2rem;
          border-radius: 12px;
          border: 1px solid rgba(0,0,0,0.1);
          background-color: var(--color-white);
          font-family: var(--font-body);
          font-size: 1rem;
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .form-input:focus {
          outline: none;
          border-color: var(--color-pink-dark);
          box-shadow: 0 0 0 4px var(--color-pink-light);
        }
        @media (min-width: 900px) {
          .contact-grid { grid-template-columns: 1fr 1fr !important; }
          .form-row { flexDirection: row !important; }
          .contact-form-container { padding: 4rem !important; }
        }
      `}</style>
        </section>
    );
};

export default Contact;

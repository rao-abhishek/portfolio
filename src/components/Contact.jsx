import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            label: "Email",
            value: "abhishekrao3011@gmail.com",
            link: "mailto:abhishekrao3011@gmail.com"
        },
        {
            icon: <Phone size={24} />,
            label: "Phone",
            value: "+91-8124070034",
            link: "tel:+918124070034"
        },
        {
            icon: <MapPin size={24} />,
            label: "Location",
            value: "Chennai, India",
            link: null
        }
    ];

    const socialLinks = [
        {
            icon: <Github size={24} />,
            label: "GitHub",
            link: "https://github.com/rao-abhishek"
        },
        {
            icon: <Linkedin size={24} />,
            label: "LinkedIn",
            link: "https://linkedin.com/in/abhishekrao3011"
        },
        {
            icon: <Send size={24} />,
            label: "LeetCode",
            link: "https://leetcode.com/codebox911"
        }
    ];

    return (
        <section id="contact" ref={ref} style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">Feel free to reach out for collaborations or just a friendly chat</p>

                    <div style={{
                        maxWidth: '900px',
                        margin: '0 auto'
                    }}>
                        {/* Contact Info Cards */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1.5rem',
                            marginBottom: '3rem'
                        }}>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    className="card"
                                    style={{ textAlign: 'center' }}
                                >
                                    <div style={{
                                        color: 'var(--accent-primary)',
                                        marginBottom: '1rem',
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>
                                        {info.icon}
                                    </div>
                                    <h3 style={{
                                        fontSize: '1.1rem',
                                        marginBottom: '0.5rem',
                                        fontWeight: 600
                                    }}>
                                        {info.label}
                                    </h3>
                                    {info.link ? (
                                        <a
                                            href={info.link}
                                            style={{
                                                color: 'var(--text-secondary)',
                                                transition: 'color 0.3s ease',
                                                fontSize: '0.95rem'
                                            }}
                                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                                            {info.value}
                                        </p>
                                    )}
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            className="card"
                            style={{ textAlign: 'center' }}
                        >
                            <h3 style={{
                                fontSize: '1.5rem',
                                marginBottom: '1.5rem',
                                color: 'var(--accent-primary)'
                            }}>
                                Connect With Me
                            </h3>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '2rem',
                                flexWrap: 'wrap'
                            }}>
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            gap: '0.5rem',
                                            color: 'var(--text-secondary)',
                                            transition: 'all 0.3s ease',
                                            padding: '1rem',
                                            borderRadius: '8px'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.color = 'var(--accent-primary)';
                                            e.currentTarget.style.background = 'var(--bg-tertiary)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.color = 'var(--text-secondary)';
                                            e.currentTarget.style.background = 'transparent';
                                        }}
                                    >
                                        {social.icon}
                                        <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>
                                            {social.label}
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.6 }}
                            style={{
                                textAlign: 'center',
                                marginTop: '3rem'
                            }}
                        >
                            <p style={{
                                color: 'var(--text-secondary)',
                                marginBottom: '1.5rem',
                                fontSize: '1.1rem'
                            }}>
                                Looking for a passionate developer to join your team?
                            </p>
                            <a href="mailto:abhishekrao3011@gmail.com" className="btn-primary">
                                Send Me an Email
                                <Mail size={18} />
                            </a>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Footer */}
            <div style={{
                marginTop: '5rem',
                paddingTop: '2rem',
                borderTop: '1px solid var(--border-color)',
                textAlign: 'center',
                color: 'var(--text-secondary)',
                fontSize: '0.9rem'
            }}>
                <p>© 2024 N. Abhishek Rao. Built with React & Framer Motion</p>
            </div>
        </section>
    );
};

export default Contact;

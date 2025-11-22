import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ExternalLink, Code2, Download } from 'lucide-react';

// Calculate years of experience
const calculateExperience = () => {
    const startDate = new Date('2023-04-01'); // Lumel start date
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate - startDate);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears.toFixed(1);
};

const Hero = () => {
    const yearsOfExperience = calculateExperience();

    return (
        <section id="home" style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Animated Background */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)',
                zIndex: 0
            }} />

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ marginBottom: '1rem' }}
                    >
                        <span style={{
                            color: 'var(--accent-primary)',
                            fontSize: '1.1rem',
                            fontWeight: 600,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <Code2 size={20} />
                            Hi, I'm
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5rem)',
                            marginBottom: '1rem',
                            fontWeight: 800
                        }}
                    >
                        N. Abhishek Rao
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="gradient-text"
                        style={{
                            fontSize: 'clamp(1.5rem, 5vw, 3rem)',
                            marginBottom: '1.5rem',
                            fontWeight: 700
                        }}
                    >
                        Software Engineer
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            fontSize: '1.2rem',
                            color: 'var(--text-secondary)',
                            maxWidth: '700px',
                            marginBottom: '2.5rem',
                            lineHeight: 1.8
                        }}
                    >
                        {yearsOfExperience}+ years of experience specializing in building high-performance web applications with React, TypeScript, and Node.js.
                        Passionate about creating scalable solutions that handle millions of records with exceptional efficiency.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        style={{
                            display: 'flex',
                            gap: '1rem',
                            flexWrap: 'wrap',
                            marginBottom: '2rem'
                        }}
                    >
                        <a href="#contact" className="btn-primary">
                            Get In Touch
                            <Mail size={18} />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/11jsnHbKTAS-1hImGbO7SkMZNdZcwYkGD/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-secondary"
                        >
                            Download Resume
                            <Download size={18} />
                        </a>
                        <a href="#projects" className="btn-secondary">
                            View Projects
                            <ExternalLink size={18} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            alignItems: 'center'
                        }}
                    >
                        <a
                            href="https://github.com/rao-abhishek"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-secondary)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <Github size={24} />
                        </a>
                        <a
                            href="https://linkedin.com/in/abhishekrao3011"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-secondary)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://leetcode.com/codebox911"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                color: 'var(--text-secondary)',
                                transition: 'all 0.3s ease',
                                fontSize: '1.3rem',
                                fontWeight: 700
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            LC
                        </a>
                        <a
                            href="mailto:abhishekrao3011@gmail.com"
                            style={{
                                color: 'var(--text-secondary)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                        >
                            <Mail size={24} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                        width: '24px',
                        height: '40px',
                        border: '2px solid var(--accent-primary)',
                        borderRadius: '12px',
                        display: 'flex',
                        justifyContent: 'center',
                        padding: '8px 0'
                    }}
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        style={{
                            width: '4px',
                            height: '8px',
                            background: 'var(--accent-primary)',
                            borderRadius: '2px'
                        }}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

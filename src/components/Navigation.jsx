import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from './ThemeSwitcher';
import LayoutSwitcher from './LayoutSwitcher';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navItems.map(item => item.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000,
                background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                borderBottom: isScrolled ? '1px solid var(--border-color)' : 'none',
                transition: 'all 0.3s ease',
                padding: '1rem 0'
            }}
        >
            <div className="container">
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 700,
                            fontFamily: 'var(--font-heading)',
                            background: 'var(--accent-gradient)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        AR
                    </a>

                    {/* Desktop Navigation */}
                    <div style={{
                        display: 'flex',
                        gap: '2rem',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            display: 'none',
                            gap: '2rem'
                        }}
                            className="desktop-nav">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    style={{
                                        color: activeSection === item.href.substring(1) ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                        fontSize: '0.95rem',
                                        fontWeight: 500,
                                        transition: 'color 0.3s ease',
                                        position: 'relative'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--accent-primary)'}
                                    onMouseLeave={(e) => {
                                        if (activeSection !== item.href.substring(1)) {
                                            e.currentTarget.style.color = 'var(--text-secondary)';
                                        }
                                    }}
                                >
                                    {item.name}
                                    {activeSection === item.href.substring(1) && (
                                        <motion.div
                                            layoutId="activeSection"
                                            style={{
                                                position: 'absolute',
                                                bottom: '-4px',
                                                left: 0,
                                                right: 0,
                                                height: '2px',
                                                background: 'var(--accent-gradient)'
                                            }}
                                        />
                                    )}
                                </a>
                            ))}
                        </div>

                        {/* Theme Switcher & Mobile Menu Button */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <LayoutSwitcher />
                            <ThemeSwitcher />

                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                style={{
                                    color: 'var(--text-primary)',
                                    display: 'none'
                                }}
                                className="mobile-menu-btn"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'var(--bg-secondary)',
                            borderTop: '1px solid var(--border-color)',
                            marginTop: '1rem'
                        }}
                    >
                        <div className="container" style={{ padding: '2rem' }}>
                            {navItems.map((item, index) => (
                                <motion.a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    style={{
                                        display: 'block',
                                        padding: '1rem 0',
                                        color: activeSection === item.href.substring(1) ? 'var(--accent-primary)' : 'var(--text-secondary)',
                                        fontSize: '1.1rem',
                                        fontWeight: 500,
                                        borderBottom: index < navItems.length - 1 ? '1px solid var(--border-color)' : 'none'
                                    }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </motion.nav>
    );
};

export default Navigation;

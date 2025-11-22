import { motion, AnimatePresence } from 'framer-motion';
import { Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const ThemeSwitcher = () => {
    const { currentTheme, setCurrentTheme, themes } = useTheme();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.6rem',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-primary)';
                    e.currentTarget.style.background = 'var(--bg-tertiary)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.background = 'var(--bg-secondary)';
                }}
            >
                <Palette size={18} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                zIndex: 999
                            }}
                        />

                        {/* Theme Menu */}
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            style={{
                                position: 'absolute',
                                top: 'calc(100% + 0.5rem)',
                                right: 0,
                                background: 'var(--bg-secondary)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '12px',
                                padding: '1rem',
                                minWidth: '200px',
                                zIndex: 1000,
                                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <div style={{
                                fontSize: '0.85rem',
                                fontWeight: 600,
                                color: 'var(--text-secondary)',
                                marginBottom: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em'
                            }}>
                                Choose Theme
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {Object.entries(themes).map(([key, theme]) => (
                                    <button
                                        key={key}
                                        onClick={() => {
                                            setCurrentTheme(key);
                                            setIsOpen(false);
                                        }}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '0.75rem',
                                            padding: '0.75rem',
                                            background: currentTheme === key ? 'var(--bg-tertiary)' : 'transparent',
                                            border: currentTheme === key ? '1px solid var(--accent-primary)' : '1px solid transparent',
                                            borderRadius: '8px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            fontSize: '0.9rem',
                                            fontWeight: currentTheme === key ? 600 : 400
                                        }}
                                        onMouseEnter={(e) => {
                                            if (currentTheme !== key) {
                                                e.currentTarget.style.background = 'var(--bg-tertiary)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (currentTheme !== key) {
                                                e.currentTarget.style.background = 'transparent';
                                            }
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '24px',
                                                height: '24px',
                                                borderRadius: '6px',
                                                background: theme.accentGradient,
                                                border: '2px solid var(--border-color)',
                                                flexShrink: 0
                                            }}
                                        />
                                        <span>{theme.name}</span>
                                        {currentTheme === key && (
                                            <span style={{ marginLeft: 'auto', color: 'var(--accent-primary)' }}>✓</span>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ThemeSwitcher;

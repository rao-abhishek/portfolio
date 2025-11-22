import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from 'lucide-react';
import { useLayout } from '../context/LayoutContext';
import { useState } from 'react';

const LayoutSwitcher = () => {
    const { currentLayout, setCurrentLayout, layouts } = useLayout();
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
                title="Switch Layout"
            >
                <Layout size={18} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <div
                            onClick={() => setIsOpen(false)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                zIndex: 999
                            }}
                        />

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
                                minWidth: '280px',
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
                                Choose Layout
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {Object.entries(layouts).map(([key, layout]) => (
                                    <button
                                        key={key}
                                        onClick={() => {
                                            setCurrentLayout(key);
                                            setIsOpen(false);
                                        }}
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            gap: '0.25rem',
                                            padding: '0.75rem',
                                            background: currentLayout === key ? 'var(--bg-tertiary)' : 'transparent',
                                            border: currentLayout === key ? '1px solid var(--accent-primary)' : '1px solid transparent',
                                            borderRadius: '8px',
                                            color: 'var(--text-primary)',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            textAlign: 'left'
                                        }}
                                        onMouseEnter={(e) => {
                                            if (currentLayout !== key) {
                                                e.currentTarget.style.background = 'var(--bg-tertiary)';
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (currentLayout !== key) {
                                                e.currentTarget.style.background = 'transparent';
                                            }
                                        }}
                                    >
                                        <div style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            width: '100%'
                                        }}>
                                            <span style={{
                                                fontSize: '0.95rem',
                                                fontWeight: currentLayout === key ? 600 : 400
                                            }}>
                                                {layout.name}
                                            </span>
                                            {currentLayout === key && (
                                                <span style={{ color: 'var(--accent-primary)' }}>✓</span>
                                            )}
                                        </div>
                                        <span style={{
                                            fontSize: '0.75rem',
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.3
                                        }}>
                                            {layout.description}
                                        </span>
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

export default LayoutSwitcher;

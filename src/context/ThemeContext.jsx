import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const themes = {
    dark: {
        name: 'Dark Blue',
        bgPrimary: '#0a0a0a',
        bgSecondary: '#111111',
        bgTertiary: '#1a1a1a',
        textPrimary: '#ffffff',
        textSecondary: '#a0a0a0',
        accentPrimary: '#3b82f6',
        accentSecondary: '#8b5cf6',
        accentGradient: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
        borderColor: '#2a2a2a'
    },
    ocean: {
        name: 'Ocean',
        bgPrimary: '#0a1628',
        bgSecondary: '#0f1f3a',
        bgTertiary: '#1a2942',
        textPrimary: '#e0f2fe',
        textSecondary: '#94a3b8',
        accentPrimary: '#06b6d4',
        accentSecondary: '#0ea5e9',
        accentGradient: 'linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)',
        borderColor: '#1e3a5f'
    },
    sunset: {
        name: 'Sunset',
        bgPrimary: '#1a0a0a',
        bgSecondary: '#2a1515',
        bgTertiary: '#3a1f1f',
        textPrimary: '#ffe4e6',
        textSecondary: '#fda4af',
        accentPrimary: '#f97316',
        accentSecondary: '#ec4899',
        accentGradient: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
        borderColor: '#4a2a2a'
    },
    forest: {
        name: 'Forest',
        bgPrimary: '#0a1a0a',
        bgSecondary: '#0f2a0f',
        bgTertiary: '#1a3a1a',
        textPrimary: '#dcfce7',
        textSecondary: '#86efac',
        accentPrimary: '#10b981',
        accentSecondary: '#22c55e',
        accentGradient: 'linear-gradient(135deg, #10b981 0%, #22c55e 100%)',
        borderColor: '#1e4a1e'
    },
    purple: {
        name: 'Purple Dream',
        bgPrimary: '#0f0a1a',
        bgSecondary: '#1a0f2a',
        bgTertiary: '#2a1a3a',
        textPrimary: '#f3e8ff',
        textSecondary: '#d8b4fe',
        accentPrimary: '#a855f7',
        accentSecondary: '#c026d3',
        accentGradient: 'linear-gradient(135deg, #a855f7 0%, #c026d3 100%)',
        borderColor: '#3a1e5a'
    },
    cyberpunk: {
        name: 'Cyberpunk',
        bgPrimary: '#0a0a0a',
        bgSecondary: '#1a0a1a',
        bgTertiary: '#2a0a2a',
        textPrimary: '#fef08a',
        textSecondary: '#fde047',
        accentPrimary: '#facc15',
        accentSecondary: '#f59e0b',
        accentGradient: 'linear-gradient(135deg, #facc15 0%, #f59e0b 100%)',
        borderColor: '#3a2a0a'
    }
};

export const ThemeProvider = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState('dark');

    useEffect(() => {
        const savedTheme = localStorage.getItem('portfolio-theme');
        if (savedTheme && themes[savedTheme]) {
            setCurrentTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        const theme = themes[currentTheme];
        const root = document.documentElement;

        root.style.setProperty('--bg-primary', theme.bgPrimary);
        root.style.setProperty('--bg-secondary', theme.bgSecondary);
        root.style.setProperty('--bg-tertiary', theme.bgTertiary);
        root.style.setProperty('--text-primary', theme.textPrimary);
        root.style.setProperty('--text-secondary', theme.textSecondary);
        root.style.setProperty('--accent-primary', theme.accentPrimary);
        root.style.setProperty('--accent-secondary', theme.accentSecondary);
        root.style.setProperty('--accent-gradient', theme.accentGradient);
        root.style.setProperty('--border-color', theme.borderColor);

        localStorage.setItem('portfolio-theme', currentTheme);
    }, [currentTheme]);

    return (
        <ThemeContext.Provider value={{ currentTheme, setCurrentTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
};

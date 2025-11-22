import { createContext, useContext, useState, useEffect } from 'react';

const LayoutContext = createContext();

export const layouts = {
    modern: {
        name: 'Modern Dark',
        description: 'Sleek dark theme with smooth animations'
    },
    bento: {
        name: 'Bento Grid',
        description: 'Minimalist light theme with cards'
    },
    magazine: {
        name: 'Magazine',
        description: 'Bold editorial design'
    },
    terminal: {
        name: 'Terminal',
        description: 'Retro hacker aesthetic'
    },
    minimal: {
        name: 'Minimal',
        description: 'Clean and simple design'
    }
};

export const LayoutProvider = ({ children }) => {
    const [currentLayout, setCurrentLayout] = useState('modern');

    useEffect(() => {
        // Always select a random layout on page load
        const layoutKeys = Object.keys(layouts);
        const randomLayout = layoutKeys[Math.floor(Math.random() * layoutKeys.length)];
        setCurrentLayout(randomLayout);
    }, []);

    useEffect(() => {
        localStorage.setItem('portfolio-layout', currentLayout);

        // Apply layout-specific body classes
        document.body.className = `layout-${currentLayout}`;

        // Force theme context to re-apply colors for the new layout
        const event = new Event('layoutchange');
        window.dispatchEvent(event);
    }, [currentLayout]);

    return (
        <LayoutContext.Provider value={{ currentLayout, setCurrentLayout, layouts }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout must be used within LayoutProvider');
    }
    return context;
};

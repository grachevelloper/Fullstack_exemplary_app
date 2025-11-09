import {ConfigProvider} from 'antd';
import React, {createContext, useCallback, useContext} from 'react';

import {CustomThemeConfig, ThemeMode, themes} from '../configs/styles';
import {useLocalStorage} from '../hooks/useLocalStore';

interface ThemeContextType {
    theme: CustomThemeConfig;
    themeMode: ThemeMode;
    setThemeMode: (mode: ThemeMode) => void;
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{children: React.ReactNode}> = ({
    children,
}) => {
    const [themeMode, setThemeMode] = useLocalStorage<ThemeMode>(
        'theme',
        'light'
    );

    const toggleTheme = useCallback(() => {
        setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
    }, [setThemeMode]);

    const theme = themes[themeMode];
    const isDark = themeMode === 'dark';

    const value: ThemeContextType = {
        theme,
        themeMode,
        setThemeMode,
        toggleTheme,
        isDark,
    };

    return (
        <ThemeContext.Provider value={value}>
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

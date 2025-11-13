import React, {createContext, useContext, useState} from 'react';

import {TodoFormVoid, type TodoFormContextType} from './types';

const ThemeContext = createContext<TodoFormContextType>(TodoFormVoid);

export const TodoFormProvider: React.FC<{children: React.ReactNode}> = ({
    children,
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const value = {
        isOpen,
        setIsOpen,
    };

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
};

export const useTodoForm = (): TodoFormContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

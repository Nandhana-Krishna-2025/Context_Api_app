import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useColorScheme } from 'react-native';

type Theme = {
  background: string;
  text: string;
  inputBorder: string;
  button: string;
};


const themes: Record<'light' | 'dark', Theme> = {
  light: {
    background: '#fff',
    text: '#000',
    inputBorder: '#ccc',
    button: '#007bff',
  },
  dark: {
    background: '#121212',
    text: '#fff',
    inputBorder: '#333',
    button: '#1e90ff',
  },
};


interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  mode: 'light' | 'dark';
}


const ThemeContext = createContext<ThemeContextType | null>(null);


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const systemTheme = useColorScheme();
  const [mode, setMode] = useState<'light' | 'dark'>(systemTheme || 'light');

  const toggleTheme = () =>
    setMode(prev => (prev === 'light' ? 'dark' : 'light'));

  return (
    <ThemeContext.Provider value={{ theme: themes[mode], toggleTheme, mode }}>
      {children}
    </ThemeContext.Provider>
  );
};


export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

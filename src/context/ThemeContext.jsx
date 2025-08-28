import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return true; // Default to dark for SSR
    }
    
    try {
      // Always use system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        console.log('System preference: dark mode');
        return true;
      } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        console.log('System preference: light mode');
        return false;
      } else {
        console.log('No system preference detected, defaulting to dark');
        return true;
      }
    } catch (error) {
      console.error('Error detecting system theme:', error);
      return true; // Default to dark mode on error
    }
  });

  const toggleTheme = () => {
    // Toggle temporarily, but it will sync back to system on next change
    setIsDarkMode(prev => {
      console.log('Manual toggle from', prev ? 'dark' : 'light', 'to', !prev ? 'dark' : 'light');
      return !prev;
    });
  };

  useEffect(() => {
    // Apply the theme to the body
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
      console.log('Applied dark mode to body');
    } else {
      document.body.classList.remove('dark-mode');
      console.log('Applied light mode to body');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === 'undefined') {
      return;
    }

    try {
      // Listen for system theme changes and always sync
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      
      const handleSystemThemeChange = (e) => {
        console.log('System theme changed to:', e.matches ? 'dark' : 'light');
        setIsDarkMode(e.matches);
      };

      // Use the newer API if available, fallback to the older one
      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', handleSystemThemeChange);
      } else {
        mediaQuery.addListener(handleSystemThemeChange);
      }
      
      return () => {
        if (mediaQuery.removeEventListener) {
          mediaQuery.removeEventListener('change', handleSystemThemeChange);
        } else {
          mediaQuery.removeListener(handleSystemThemeChange);
        }
      };
    } catch (error) {
      console.error('Error setting up system theme listener:', error);
    }
  }, []);

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
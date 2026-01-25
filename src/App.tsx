/** REACT */
import { Routes, Route, HashRouter, Navigate } from 'react-router-dom';
import { useMemo, useState } from 'react';

/** COMPONENTS */
import Header from './components/Header';
import Footer from './components/Footer';

/** PAGES */
import Home from './pages/Home';

/** THEME */
import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './data/Theme';
import CssBaseline from '@mui/material/CssBaseline';

/** STYLES */
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const App = () => {
  const [mode, setMode] = useState<'light' | 'dark'>(() => {
    const stored = localStorage.getItem('colorMode');
    return stored === 'dark' ? 'dark' : 'light';
  });
  const toggleColorMode = () => {
    setMode((prevMode) => {
      const nextMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('colorMode', nextMode); // Save preference
      return nextMode;
    });
  };
  const theme = useMemo(
    () => (mode === 'light' ? lightTheme : darkTheme),
    [mode]
  );
  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header toggleColorMode={toggleColorMode} mode={`${mode}`} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
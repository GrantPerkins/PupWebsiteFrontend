import { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { ThemeProvider as StylesThemeProvider } from '@mui/styles';
import { theme } from './theme';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRoutes() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home isMobile={isMobile} />} />
        <Route path="/about" element={<About isMobile={isMobile} />} />
        <Route path="/services" element={<Services isMobile={isMobile} />} />
        <Route path="/gallery" element={<Gallery isMobile={isMobile} />} />
        <Route path="/contact" element={<Contact isMobile={isMobile} />} />
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StylesThemeProvider theme={theme}>
        <CssBaseline />
        <HashRouter>
          <AppRoutes />
        </HashRouter>
      </StylesThemeProvider>
    </ThemeProvider>
  );
}

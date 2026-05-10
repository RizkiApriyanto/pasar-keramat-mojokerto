import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/About';
import HistoryPage from './pages/History';
import BumiKramatPage from './pages/BumiKramat';
import ProductsPage from './pages/Products';
import GalleryPage from './pages/Gallery';
import NewsPage from './pages/News';
import ContactPage from './pages/Contact';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tentang" element={<AboutPage />} />
            <Route path="/sejarah" element={<HistoryPage />} />
            <Route path="/bumi-kramat" element={<BumiKramatPage />} />
            <Route path="/produk" element={<ProductsPage />} />
            <Route path="/galeri" element={<GalleryPage />} />
            <Route path="/berita" element={<NewsPage />} />
            <Route path="/kontak" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

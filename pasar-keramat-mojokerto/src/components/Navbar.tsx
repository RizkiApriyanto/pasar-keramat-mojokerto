import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { 
      name: 'Tentang', 
      href: '/tentang',
      subItems: [
        { name: 'Sejarah', href: '/sejarah' },
        { name: 'Bumi Kramat', href: '/bumi-kramat' },
      ]
    },
    { 
      name: 'Produk', 
      href: '/produk',
      subItems: [
        { name: 'Kuliner', href: '/produk?category=Kuliner' },
        { name: 'Kerajinan', href: '/produk?category=Kerajinan' },
        { name: 'Minuman', href: '/produk?category=Minuman' },
        { name: 'Souvenir', href: '/produk?category=Souvenir' },
      ]
    },
    { name: 'Galeri', href: '/galeri' },
    { name: 'Berita', href: '/berita' },
    { name: 'Kontak', href: '/kontak' },
  ];

  const isHome = location.pathname === '/';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled || !isHome ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-forest-600 rounded-lg flex items-center justify-center text-white font-display font-bold text-xl group-hover:rotate-12 transition-transform">
            PK
          </div>
          <span className={`font-display font-bold text-xl tracking-tight ${isScrolled || !isHome ? 'text-earth-900' : 'text-white'}`}>
            PASAR <span className="text-forest-500">KERAMAT</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <div 
              key={link.name} 
              className="relative group"
              onMouseEnter={() => link.subItems && setActiveDropdown(link.name)}
              onMouseLeave={() => link.subItems && setActiveDropdown(null)}
            >
              <Link 
                to={link.href} 
                className={`font-medium transition-colors hover:text-forest-500 flex items-center gap-1 ${isScrolled || !isHome ? 'text-earth-700' : 'text-white/90'}`}
              >
                {link.name}
                {link.subItems && <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </Link>

              {link.subItems && (
                <AnimatePresence>
                  {activeDropdown === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-earth-100 overflow-hidden py-2"
                    >
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-6 py-2 text-sm text-earth-700 hover:bg-forest-50 hover:text-forest-600 transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-lg ${isScrolled || !isHome ? 'text-earth-900' : 'text-white'}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-earth-100 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <div className="flex justify-between items-center py-2 border-b border-earth-50">
                    <Link 
                      to={link.href} 
                      className="text-earth-700 font-medium text-lg"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                    {link.subItems && (
                      <button 
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveDropdown(activeDropdown === link.name ? null : link.name);
                        }}
                        className="p-2 text-earth-400"
                      >
                        <ChevronDown size={20} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {link.subItems && activeDropdown === link.name && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {link.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="text-earth-500 py-1"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

import { Link } from 'react-router-dom';
import { ArrowRight, Star, Instagram, Youtube, Music2 as TikTok } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-earth-50 pt-20 pb-10 border-t border-earth-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-forest-600 rounded-lg flex items-center justify-center text-white font-display font-bold text-lg">
                PK
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-earth-900">
                PASAR <span className="text-forest-500">KERAMAT</span>
              </span>
            </div>
            <p className="text-earth-600 leading-relaxed mb-8">
              Menjaga tradisi, memberdayakan komunitas, dan merayakan kekayaan budaya Mojokerto melalui pengalaman pasar yang autentik.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/pasar_keramat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-earth-400 hover:text-forest-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.tiktok.com/@pasarkeramat_?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="text-earth-400 hover:text-forest-600 transition-colors">
                <TikTok size={20} />
              </a>
              <a href="https://youtube.com/@pasar_keramat?si=T8rRS-esvf-6wFlB" target="_blank" rel="noopener noreferrer" className="text-earth-400 hover:text-forest-600 transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-earth-900 mb-6 uppercase tracking-widest text-xs">Tautan Cepat</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-earth-600 hover:text-forest-600 transition-colors">Beranda</Link></li>
              <li><Link to="/tentang" className="text-earth-600 hover:text-forest-600 transition-colors">Tentang Kami</Link></li>
              <li><Link to="/produk" className="text-earth-600 hover:text-forest-600 transition-colors">Produk Lokal</Link></li>
              <li><Link to="/galeri" className="text-earth-600 hover:text-forest-600 transition-colors">Galeri</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-earth-900 mb-6 uppercase tracking-widest text-xs">Bantuan</h4>
            <ul className="space-y-4">
              <li><Link to="#" className="text-earth-600 hover:text-forest-600 transition-colors">FAQ</Link></li>
              <li><Link to="#" className="text-earth-600 hover:text-forest-600 transition-colors">Kebijakan Privasi</Link></li>
              <li><Link to="#" className="text-earth-600 hover:text-forest-600 transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link to="/kontak" className="text-earth-600 hover:text-forest-600 transition-colors">Hubungi Kami</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-earth-900 mb-6 uppercase tracking-widest text-xs">Newsletter</h4>
            <p className="text-earth-600 text-sm mb-4">Dapatkan info promo dan acara terbaru langsung di email Anda.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Anda" 
                className="bg-white border border-earth-200 px-4 py-2 rounded-full text-sm w-full focus:outline-none focus:border-forest-500"
              />
              <button className="w-10 h-10 bg-forest-600 text-white rounded-full flex items-center justify-center shrink-0 hover:bg-forest-700 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-earth-200 gap-4">
          <p className="text-earth-500 text-sm">
            © 2024 Pasar Keramat Mojokerto. All rights reserved.
          </p>
          <p className="text-earth-400 text-xs flex items-center gap-1">
            Made with <Star size={12} className="fill-earth-400" /> in Mojokerto
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { motion } from 'motion/react';
import { History, Leaf, Utensils, Users, Shield, Globe, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const values = [
    { icon: <History size={32} />, title: "Pelestarian Budaya", desc: "Menjaga dan memperkenalkan warisan leluhur kepada generasi muda." },
    { icon: <Leaf size={32} />, title: "Keberlanjutan", desc: "Menerapkan konsep ramah lingkungan dalam setiap operasional pasar." },
    { icon: <Utensils size={32} />, title: "Kualitas Autentik", desc: "Memastikan setiap produk yang dijual memiliki standar kualitas tradisional yang tinggi." },
    { icon: <Users size={32} />, title: "Pemberdayaan", desc: "Mendukung ekonomi lokal dengan memberikan ruang bagi UMKM Mojokerto." },
    { icon: <Shield size={32} />, title: "Keamanan & Kenyamanan", desc: "Menciptakan lingkungan belanja yang aman dan nyaman bagi semua pengunjung." },
    { icon: <Globe size={32} />, title: "Visi Global", desc: "Membawa produk lokal Mojokerto agar dikenal di kancah nasional maupun internasional." },
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding bg-earth-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-earth-900 mb-6"
          >
            Tentang <span className="text-forest-600">Pasar Keramat</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-earth-700 max-w-3xl mx-auto"
          >
            Menelusuri jejak sejarah dan dedikasi kami dalam menjaga kearifan lokal Mojokerto.
          </motion.p>
        </div>
      </section>

      {/* Summary Sections */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {/* Sejarah Summary */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-earth-900 mb-6">Sejarah Kami</h2>
              <p className="text-earth-700 leading-relaxed text-lg mb-8">
                Pasar Keramat Mojokerto berawal dari sebuah keinginan sederhana: menyelamatkan tradisi pasar tumpah yang hampir punah. Terletak di kawasan bersejarah, pasar ini telah menjadi saksi bisu perkembangan ekonomi masyarakat Mojokerto selama lebih dari dua dekade.
              </p>
              <Link to="/sejarah" className="btn-primary inline-flex items-center gap-2 group">
                Baca Selengkapnya
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://picsum.photos/seed/history-summary/800/600" 
                alt="History Summary" 
                className="rounded-[2rem] shadow-xl w-full object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Bumi Kramat Summary */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-1">
              <img 
                src="https://picsum.photos/seed/art-summary/800/600" 
                alt="Art Studio Summary" 
                className="rounded-[2rem] shadow-xl w-full object-cover aspect-video"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-2">
              <h2 className="text-3xl font-bold text-earth-900 mb-6">Bumi Kramat</h2>
              <p className="text-earth-700 leading-relaxed text-lg mb-8">
                Pasar Keramat menjadi rumah bagi berbagai sanggar kesenian tradisional Jawa Timur. Kami berkomitmen melestarikan warisan budaya melalui pertunjukan rutin dan pelatihan bagi generasi muda.
              </p>
              <Link to="/bumi-kramat" className="btn-primary inline-flex items-center gap-2 group">
                Jelajahi Kesenian Kami
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">Nilai-Nilai Kami</h2>
            <p className="text-earth-600">Prinsip yang kami pegang teguh dalam menjalankan setiap kegiatan di Pasar Keramat.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-earth-100 card-hover"
              >
                <div className="text-forest-500 mb-6">{v.icon}</div>
                <h3 className="text-xl font-bold text-earth-900 mb-4">{v.title}</h3>
                <p className="text-earth-600 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

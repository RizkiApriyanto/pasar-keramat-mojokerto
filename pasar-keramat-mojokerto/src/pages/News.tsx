import { motion } from 'motion/react';
import { Calendar, ArrowRight, Search, Tag } from 'lucide-react';

const NewsPage = () => {
  const news = [
    { 
      date: "25 Mar 2024", 
      title: "Pasar Keramat Mojokerto: Wisata Kuliner Tradisional dengan Koin Kayu", 
      category: "Media", 
      desc: "Radar Mojokerto mengulas keunikan Pasar Keramat yang menghidupkan kembali nuansa pasar tempo dulu dengan sistem transaksi koin kayu yang unik.", 
      img: "https://picsum.photos/seed/traditional-market/800/400",
      url: "https://radarmojokerto.jawapos.com/" 
    },
    { 
      date: "10 Mar 2024", 
      title: "Menikmati Kelezatan Nasi Jagung Autentik di Jantung Mojokerto", 
      category: "Kuliner", 
      desc: "Detik Jatim mengeksplorasi ragam kuliner tradisional di Pasar Keramat, mulai dari nasi jagung hingga wedang rempah yang legendaris.", 
      img: "https://picsum.photos/seed/indonesian-food/800/400",
      url: "https://www.detik.com/jatim" 
    },
    { 
      date: "28 Feb 2024", 
      title: "Pasar Keramat Raih Penghargaan Destinasi Wisata Budaya Terfavorit", 
      category: "News", 
      desc: "Penghargaan bergengsi dari Dinas Pariwisata atas kontribusi Pasar Keramat dalam melestarikan budaya lokal dan memberdayakan UMKM.", 
      img: "https://picsum.photos/seed/tourism-award/800/400",
      url: "https://mojokertokab.go.id/" 
    },
    { 
      date: "15 Feb 2024", 
      title: "Inovasi 'Zero Waste': Pasar Keramat Tanpa Kantong Plastik", 
      category: "Lingkungan", 
      desc: "Media lokal menyoroti komitmen Pasar Keramat dalam menjaga kelestarian alam dengan menerapkan aturan bebas plastik bagi seluruh pedagang.", 
      img: "https://picsum.photos/seed/eco-friendly/800/400",
      url: "https://jatim.tribunnews.com/" 
    },
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding bg-earth-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div className="max-w-2xl">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-earth-900 mb-6"
              >
                Berita & <span className="text-forest-600">Acara</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-earth-700"
              >
                Tetap terhubung dengan perkembangan terbaru dan jadwal kegiatan di Pasar Keramat.
              </motion.p>
            </div>
            <div className="w-full md:w-auto relative">
              <input 
                type="text" 
                placeholder="Cari berita..." 
                className="w-full md:w-80 bg-white border border-earth-200 px-12 py-3 rounded-full focus:outline-none focus:border-forest-500 shadow-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-earth-400" size={20} />
            </div>
          </div>
        </div>
      </section>

      {/* News Listing */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-12">
            {news.map((n, i) => (
              <motion.article 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center group"
              >
                <div className="rounded-[2rem] overflow-hidden aspect-video shadow-xl">
                  <img 
                    src={n.img} 
                    alt={n.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-forest-50 text-forest-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      <Tag size={12} />
                      {n.category}
                    </span>
                    <span className="flex items-center gap-1.5 text-earth-400 text-sm">
                      <Calendar size={14} />
                      {n.date}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-earth-900 mb-4 group-hover:text-forest-600 transition-colors">
                    {n.title}
                  </h2>
                  <p className="text-earth-600 text-lg leading-relaxed mb-8">
                    {n.desc}
                  </p>
                  <a 
                    href={n.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-bold text-forest-600 hover:gap-3 transition-all"
                  >
                    Baca Selengkapnya <ArrowRight size={20} />
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="mt-20 flex justify-center gap-2">
            <button className="w-12 h-12 rounded-full bg-forest-600 text-white font-bold shadow-lg">1</button>
            <button className="w-12 h-12 rounded-full bg-white text-earth-700 font-bold border border-earth-100 hover:bg-earth-50 transition-colors">2</button>
            <button className="w-12 h-12 rounded-full bg-white text-earth-700 font-bold border border-earth-100 hover:bg-earth-50 transition-colors">3</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;

import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { 
  Star, ArrowRight, Clock, History, Leaf, Utensils, 
  Camera, Newspaper, ChevronRight, Quote 
} from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen md:h-[calc(100vh+45px)] flex items-center overflow-hidden py-20 md:py-0">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.promediateknologi.id/crop/0x0:0x0/750x0/webp/photo/p1/882/2023/11/18/d6249e0c-4ebd-4d27-9df4-6e62660f5f23-2037980030.jpeg" 
          alt="Pasar Keramat Background" 
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-900/80 via-black-900/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-[23px] md:pt-[20px]">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1]">
            Warisan Budaya <br /> 
            <span className="text-forest-400 italic">Dalam Harmoni</span> Modern
          </h1>
          <p className="text-lg md:text-xl text-white/80 mb-10 leading-relaxed max-w-xl">
            Rasakan pengalaman berbelanja tradisional yang unik dengan sentuhan kearifan lokal, kuliner khas, dan kerajinan tangan autentik di jantung Mojokerto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/tentang" className="btn-primary flex items-center justify-center gap-2 group">
              Jelajahi Sekarang
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/galeri" className="btn-secondary flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-sm">
              Lihat Galeri
            </Link>
          </div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 right-12 hidden lg:block"
      >
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-white">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-forest-500 rounded-full flex items-center justify-center">
              <Clock size={24} />
            </div>
            <div>
              <p className="text-xs text-white/60 uppercase tracking-widest">Jam Operasional</p>
              <p className="font-bold">08:00 - 17:00 WIB</p>
            </div>
          </div>
          <p className="text-sm text-white/70">Buka setiap hari Sabtu & Minggu</p>
        </div>
      </motion.div>
    </section>
  );
};

const AboutSummary = () => {
  const features = [
    { icon: <History className="text-forest-500" />, title: "Sejarah Kaya", desc: "Berdiri sejak puluhan tahun sebagai pusat ekonomi warga lokal." },
    { icon: <Leaf className="text-forest-500" />, title: "Ramah Lingkungan", desc: "Berkomitmen pada keberlanjutan dan pengurangan sampah plastik." },
    { icon: <Utensils className="text-forest-500" />, title: "Kuliner Autentik", desc: "Menyajikan resep tradisional yang diwariskan turun-temurun." },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://assets-a1.kompasiana.com/items/album/2023/12/21/screenshot-2023-12-21-21-26-08-615-com-alphainventor-filemanager-2-65844cf3de948f05930c7d62.jpg" 
                alt="Pasar Keramat Culture" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-64 bg-earth-100 p-8 rounded-3xl shadow-xl border border-earth-200 hidden md:block">
              <p className="text-4xl font-bold text-forest-600 mb-2">25+ Tahun</p>
              <p className="text-earth-700 font-medium">Menjaga Tradisi & Budaya Lokal</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-earth-500 font-bold uppercase tracking-widest text-sm mb-4">Tentang Kami</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-earth-900 mb-8 leading-tight">
              Lebih Dari Sekadar <br /> <span className="text-forest-600">Pasar Tradisional</span>
            </h3>
            <p className="text-lg text-earth-700 mb-10 leading-relaxed">
              Pasar Keramat Mojokerto adalah sebuah inisiatif komunitas yang bertujuan untuk menghidupkan kembali semangat pasar tradisional dengan kemasan yang lebih modern dan nyaman bagi wisatawan.
            </p>
            
            <div className="grid gap-6 mb-10">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-2xl hover:bg-earth-50 transition-colors group">
                  <div className="w-12 h-12 bg-forest-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-forest-100 transition-colors">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-earth-900 mb-1">{f.title}</h4>
                    <p className="text-earth-600 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/tentang" className="btn-primary">Pelajari Selengkapnya</Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProductSummary = () => {
  const products = [
    { name: "Nasi Jagung Keramat", desc: "Nasi jagung tradisional dengan lauk pauk lengkap khas Mojokerto.", img: "https://picsum.photos/seed/food1/400/400", tag: "Kuliner" },
    { name: "Batik Tulis Khas", desc: "Batik tulis dengan motif eksklusif yang dikerjakan oleh pengrajin lokal.", img: "https://picsum.photos/seed/craft1/400/400", tag: "Kerajinan" },
    { name: "Wedang Uwuh", desc: "Minuman rempah tradisional yang menghangatkan tubuh.", img: "https://picsum.photos/seed/drink1/400/400", tag: "Minuman" },
    { name: "Anyaman Bambu", desc: "Tas anyaman bambu yang kuat dan ramah lingkungan.", img: "https://picsum.photos/seed/craft2/400/400", tag: "Souvenir" },
  ];

  return (
    <section className="section-padding bg-earth-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-xl">
            <h2 className="text-earth-500 font-bold uppercase tracking-widest text-sm mb-4">Produk Unggulan</h2>
            <h3 className="text-4xl font-bold text-earth-900">Keunikan Lokal yang Autentik</h3>
          </div>
          <Link to="/produk" className="text-forest-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Lihat Semua Produk <ChevronRight size={20} />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden card-hover"
            >
              <div className="aspect-square relative">
                <img 
                  src={p.img} 
                  alt={p.name} 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest-600">
                  {p.tag}
                </div>
              </div>
              <div className="p-6">
                <h4 className="font-bold text-earth-900 mb-2 text-lg">{p.name}</h4>
                <p className="text-earth-600 text-sm line-clamp-2">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySummary = () => {
  const images = [
    { src: "https://picsum.photos/seed/gal1/800/600", size: "col-span-2 row-span-2" },
    { src: "https://picsum.photos/seed/gal2/400/600", size: "col-span-1 row-span-2" },
    { src: "https://picsum.photos/seed/gal3/400/300", size: "col-span-1 row-span-1" },
    { src: "https://picsum.photos/seed/gal4/400/300", size: "col-span-1 row-span-1" },
  ];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-earth-500 font-bold uppercase tracking-widest text-sm mb-4">Galeri Foto</h2>
          <h3 className="text-4xl font-bold text-earth-900 mb-6">Momen Berharga di Pasar Keramat</h3>
          <p className="text-earth-600 mb-8">Setiap sudut pasar menyimpan cerita dan kehangatan masyarakat yang ramah.</p>
          <Link to="/galeri" className="btn-secondary inline-flex items-center gap-2">
            Lihat Semua Foto <Camera size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`${img.size} rounded-3xl overflow-hidden group relative cursor-pointer`}
            >
              <img 
                src={img.src} 
                alt={`Gallery ${i}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-forest-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Camera className="text-white" size={32} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const VisitorReviews = () => {
  const reviews = [
    {
      name: "Siti Aminah",
      role: "Wisatawan Lokal",
      comment: "Pengalaman yang sangat unik! Sistem koin kayunya membuat suasana belanja terasa sangat tradisional dan autentik.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=siti"
    },
    {
      name: "Budi Santoso",
      role: "Pecinta Kuliner",
      comment: "Nasi jagungnya luar biasa enak. Jarang sekali menemukan rasa yang se-asli ini di tempat lain. Wajib dicoba!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=budi"
    },
    {
      name: "Linda Wijaya",
      role: "Fotografer",
      comment: "Banyak spot foto yang sangat estetik dan kental dengan nuansa budaya. Sangat rekomendasikan untuk dikunjungi di akhir pekan.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?u=linda"
    }
  ];

  return (
    <section className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-earth-500 font-bold uppercase tracking-widest text-sm mb-4">Ulasan Pengunjung</h2>
          <h3 className="text-4xl font-bold text-earth-900 mb-6">Cerita Mereka Tentang Kami</h3>
          <p className="text-earth-600 max-w-2xl mx-auto">Pengalaman berkesan dari para pengunjung yang telah merasakan kehangatan budaya di Pasar Keramat.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-earth-50 p-8 rounded-[2.5rem] relative group hover:bg-forest-900 transition-all duration-500"
            >
              <div className="absolute top-8 right-8 text-forest-200 group-hover:text-forest-400/20 transition-colors">
                <Quote size={40} className="opacity-20" />
              </div>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    className={`${index < r.rating ? "fill-amber-400 text-amber-400" : "text-earth-300"} transition-colors`}
                  />
                ))}
              </div>
              <p className="text-earth-700 mb-8 italic leading-relaxed group-hover:text-white/80 transition-colors">
                "{r.comment}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={r.avatar}
                  alt={r.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-earth-900 group-hover:text-white transition-colors">{r.name}</h4>
                  <p className="text-xs text-earth-500 group-hover:text-white/60 transition-colors uppercase tracking-wider">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const NewsSummary = () => {
  const news = [
    { 
      date: "25 Mar 2024", 
      title: "Pasar Keramat: Wisata Kuliner Tradisional dengan Koin Kayu", 
      category: "Media",
      url: "https://radarmojokerto.jawapos.com/"
    },
    { 
      date: "10 Mar 2024", 
      title: "Menikmati Kelezatan Nasi Jagung Autentik di Mojokerto", 
      category: "Kuliner",
      url: "https://www.detik.com/jatim"
    },
    { 
      date: "28 Feb 2024", 
      title: "Pasar Keramat Raih Penghargaan Wisata Budaya", 
      category: "News",
      url: "https://mojokertokab.go.id/"
    },
  ];

  return (
    <section className="section-padding bg-earth-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <h2 className="text-earth-500 font-bold uppercase tracking-widest text-sm mb-4">Berita & Acara</h2>
            <h3 className="text-4xl font-bold text-earth-900 mb-8">Ikuti Update Terbaru Kami</h3>
            <p className="text-earth-600 mb-10">Jangan lewatkan berbagai acara menarik dan berita terkini seputar Pasar Keramat Mojokerto.</p>
            <Link to="/berita" className="btn-primary inline-flex items-center gap-2">
              Lihat Semua Berita <Newspaper size={18} />
            </Link>
          </div>

          <div className="lg:col-span-2 grid gap-6">
            {news.map((n, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4 card-hover border border-earth-100"
              >
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-bold text-forest-500 uppercase tracking-widest">{n.category}</span>
                    <span className="w-1 h-1 bg-earth-300 rounded-full"></span>
                    <span className="text-xs text-earth-500">{n.date}</span>
                  </div>
                  <h4 className="text-xl font-bold text-earth-900 group-hover:text-forest-600 transition-colors">{n.title}</h4>
                </div>
                <a 
                  href={n.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border border-earth-200 flex items-center justify-center hover:bg-forest-600 hover:text-white hover:border-forest-600 transition-all"
                >
                  <ChevronRight size={24} />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSummary />
      <ProductSummary />
      <VisitorReviews />
      <GallerySummary />
      <NewsSummary />
    </>
  );
};

export default Home;

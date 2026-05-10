import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Info } from 'lucide-react';

const ProductsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'Semua';
  const [activeCategory, setActiveCategory] = useState(initialCategory);

  useEffect(() => {
    const cat = searchParams.get('category') || 'Semua';
    setActiveCategory(cat);
  }, [searchParams]);

  const categories = ["Semua", "Kuliner", "Kerajinan", "Minuman", "Souvenir"];
  const products = [
    { name: "Nasi Jagung Keramat", price: "Rp 15.000", img: "https://picsum.photos/seed/food1/400/400", tag: "Kuliner", desc: "Nasi jagung tradisional dengan lauk pauk lengkap khas Mojokerto." },
    { name: "Batik Tulis Khas", price: "Rp 250.000", img: "https://picsum.photos/seed/craft1/400/400", tag: "Kerajinan", desc: "Batik tulis dengan motif eksklusif yang dikerjakan oleh pengrajin lokal." },
    { name: "Wedang Uwuh", price: "Rp 10.000", img: "https://picsum.photos/seed/drink1/400/400", tag: "Minuman", desc: "Minuman rempah tradisional yang menghangatkan tubuh." },
    { name: "Anyaman Bambu", price: "Rp 45.000", img: "https://picsum.photos/seed/craft2/400/400", tag: "Souvenir", desc: "Tas anyaman bambu yang kuat dan ramah lingkungan." },
    { name: "Sate Kelapa", price: "Rp 20.000", img: "https://picsum.photos/seed/food2/400/400", tag: "Kuliner", desc: "Sate daging sapi dengan bumbu kelapa yang gurih." },
    { name: "Kopi Keramat", price: "Rp 12.000", img: "https://picsum.photos/seed/drink2/400/400", tag: "Minuman", desc: "Kopi robusta pilihan dari perkebunan lokal Mojokerto." },
    { name: "Wayang Kulit Mini", price: "Rp 75.000", img: "https://picsum.photos/seed/craft3/400/400", tag: "Kerajinan", desc: "Souvenir wayang kulit mini untuk hiasan dinding." },
    { name: "Gula Merah Asli", price: "Rp 25.000", img: "https://picsum.photos/seed/food3/400/400", tag: "Kuliner", desc: "Gula merah murni tanpa bahan pengawet." },
  ];

  const filteredProducts = activeCategory === "Semua" 
    ? products 
    : products.filter(p => p.tag === activeCategory);

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    if (cat === "Semua") {
      searchParams.delete('category');
    } else {
      searchParams.set('category', cat);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding bg-forest-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Produk <span className="text-forest-300">Unggulan</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Temukan keunikan dan kualitas terbaik dari produk-produk UMKM lokal Mojokerto.
          </motion.p>
        </div>
      </section>

      {/* Filter & Listing */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((cat, i) => (
              <button 
                key={i}
                onClick={() => handleCategoryChange(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === cat ? 'bg-forest-600 text-white shadow-lg' : 'bg-white text-earth-700 hover:bg-earth-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((p) => (
                <motion.div 
                  key={p.name}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white rounded-3xl overflow-hidden card-hover border border-earth-100 flex flex-col h-full"
                >
                  <div className="aspect-square relative group overflow-hidden">
                    <img 
                      src={p.img} 
                      alt={p.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-forest-600 shadow-sm">
                      {p.tag}
                    </div>
                    <div className="absolute inset-0 bg-forest-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                      <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-forest-600 hover:bg-forest-600 hover:text-white transition-all">
                        <Info size={20} />
                      </button>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-earth-900 text-lg leading-tight">{p.name}</h4>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star size={14} className="fill-yellow-500" />
                        <span className="text-xs font-bold">4.9</span>
                      </div>
                    </div>
                    <p className="text-earth-600 text-sm mb-6 flex-grow">{p.desc}</p>
                    <div className="flex justify-end items-center pt-4 border-t border-earth-50">
                      <button className="text-sm font-bold text-earth-400 hover:text-forest-600 transition-colors">
                        Detail Selengkapnya
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

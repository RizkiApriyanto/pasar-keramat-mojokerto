import { motion } from 'motion/react';
import { Camera, Instagram, Youtube, Music2 as TikTok, Star, Quote } from 'lucide-react';

const GalleryPage = () => {
  const images = [
    { src: "https://picsum.photos/seed/gal1/800/600", size: "col-span-2 row-span-2", title: "Suasana Pagi" },
    { src: "https://picsum.photos/seed/gal2/400/600", size: "col-span-1 row-span-2", title: "Pengrajin Batik" },
    { src: "https://picsum.photos/seed/gal3/400/300", size: "col-span-1 row-span-1", title: "Kuliner Khas" },
    { src: "https://picsum.photos/seed/gal4/400/300", size: "col-span-1 row-span-1", title: "Interaksi Warga" },
    { src: "https://picsum.photos/seed/gal5/400/300", size: "col-span-1 row-span-1", title: "Seni Pertunjukan" },
    { src: "https://picsum.photos/seed/gal6/800/600", size: "col-span-2 row-span-2", title: "Pemandangan Pasar" },
    { src: "https://picsum.photos/seed/gal7/400/600", size: "col-span-1 row-span-2", title: "Produk Lokal" },
    { src: "https://picsum.photos/seed/gal8/400/300", size: "col-span-1 row-span-1", title: "Senyum Ramah" },
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding bg-earth-900 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Galeri <span className="text-forest-400">Visual</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Menangkap momen-momen berharga dan keindahan tradisi di Pasar Keramat Mojokerto.
          </motion.p>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
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
                  alt={img.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-forest-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-6 text-center">
                  <Camera className="text-white mb-4" size={32} />
                  <h4 className="text-white font-bold text-lg">{img.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visitor Reviews */}
      <section className="section-padding bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-earth-500 font-bold uppercase tracking-widest text-sm mb-4">Ulasan Pengunjung</h2>
            <h3 className="text-4xl font-bold text-earth-900 mb-6">Cerita Mereka Tentang Kami</h3>
            <p className="text-earth-600 max-w-2xl mx-auto">Pengalaman berkesan dari para pengunjung yang telah merasakan kehangatan budaya di Pasar Keramat.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
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
            ].map((r, i) => (
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

      {/* Digital Moments (Social Posts) */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-earth-500 font-bold uppercase tracking-widest text-sm mb-4">Momen Digital</h2>
            <h3 className="text-4xl font-bold text-earth-900 mb-6">Keseruan di Media Sosial</h3>
            <p className="text-earth-600 max-w-2xl mx-auto">Lihat apa yang sedang ramai dibicarakan dan dibagikan oleh komunitas kami di platform digital.</p>
          </div>

          <div className="space-y-20">
            {/* Instagram Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-forest-600 rounded-xl flex items-center justify-center text-white">
                  <Instagram size={20} />
                </div>
                <h4 className="text-2xl font-bold text-earth-900">Instagram Highlights</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    url: "https://www.instagram.com/p/DXa9uinj9Hs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    img: "https://picsum.photos/seed/pasar-keramat-atmosphere/600/600",
                    caption: "Suasana akhir pekan yang hangat di Pasar Keramat. Terima kasih sudah berkunjung! 🌿✨ #PasarKeramat #Mojokerto"
                  },
                  {
                    url: "https://www.instagram.com/p/DTHE-CLD51g/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    img: "https://picsum.photos/seed/pasar-keramat-culinary/600/600",
                    caption: "Momen kebersamaan pengunjung menikmati hidangan tradisional. 🍲🌿 #PasarKeramat #KulinerMojokerto"
                  },
                  {
                    url: "https://www.instagram.com/reel/DKW-Sc1RoYE/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
                    img: "https://picsum.photos/seed/pasar-keramat-performance/600/600",
                    caption: "Keseruan pertunjukan seni di panggung utama Pasar Keramat. 🎭✨ #PasarKeramat #BudayaJawa"
                  }
                ].map((post, i) => (
                  <motion.a
                    key={`ig-${i}`}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-earth-100 group block cursor-pointer"
                  >
                    <div className="aspect-square bg-earth-100 relative overflow-hidden">
                      <img 
                        src={post.img} 
                        alt="Instagram Post" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <Instagram className="text-white" size={32} />
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-earth-700 text-sm line-clamp-2">{post.caption}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* TikTok Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-earth-900 rounded-xl flex items-center justify-center text-white">
                  <TikTok size={20} />
                </div>
                <h4 className="text-2xl font-bold text-earth-900">TikTok Trending</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    url: "https://www.tiktok.com/@pasarkeramat_/photo/7631449599277911316?is_from_webapp=1&sender_device=pc&web_id=7582308060324972050",
                    img: "https://picsum.photos/seed/tt-post-pasar-1/450/800",
                    caption: "Momen magis di Pasar Keramat! ✨🌿"
                  },
                  {
                    url: "https://www.tiktok.com/@pasarkeramat_/video/7600673202905337095?is_from_webapp=1&sender_device=pc&web_id=7582308060324972050",
                    img: "https://picsum.photos/seed/tt-post-pasar-2/450/800",
                    caption: "Review jujur kuliner tradisional Mojokerto! 🍲😍"
                  },
                  {
                    url: "https://www.tiktok.com/@pasarkeramat_/photo/7591850420163726600?is_from_webapp=1&sender_device=pc&web_id=7582308060324972050",
                    img: "https://picsum.photos/seed/tt-post-pasar-3/450/800",
                    caption: "POV: Jajan tradisional pakai koin kayu! 🪙🍃"
                  }
                ].map((post, i) => (
                  <motion.a
                    key={`tt-${i}`}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-earth-100 group block cursor-pointer"
                  >
                    <div className="aspect-[9/16] bg-earth-100 relative overflow-hidden">
                      <img 
                        src={post.img} 
                        alt="TikTok Post" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <TikTok className="text-white" size={32} />
                      </div>
                      <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-white text-sm font-medium">{post.caption}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* YouTube Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center text-white">
                  <Youtube size={20} />
                </div>
                <h4 className="text-2xl font-bold text-earth-900">Video Terbaru</h4>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    url: "https://youtu.be/EAk7SUBd8SA?si=rFfOX8c_Y_fOPuAn",
                    img: "https://img.youtube.com/vi/EAk7SUBd8SA/maxresdefault.jpg",
                    title: "DOKUMENTER PASAR KERAMAT - MOJOKERTO",
                    stats: "1.2rb ditonton • 2 minggu yang lalu"
                  },
                  {
                    url: "https://youtu.be/H_cVUD5DN-0?si=3AJHmNNvk4Bw-I6C",
                    img: "https://img.youtube.com/vi/H_cVUD5DN-0/maxresdefault.jpg",
                    title: "SUASANA PASAR KERAMAT KLIWON",
                    stats: "850 ditonton • 1 bulan yang lalu"
                  },
                  {
                    url: "https://youtu.be/ZWwHuZ3Tl2M?si=NVMp7XeZF5YZxYg7",
                    img: "https://img.youtube.com/vi/ZWwHuZ3Tl2M/maxresdefault.jpg",
                    title: "PROFIL DESA WISATA PASAR KERAMAT",
                    stats: "2.1rb ditonton • 3 bulan yang lalu"
                  }
                ].map((video, i) => (
                  <motion.a
                    key={`yt-${i}`}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-3xl overflow-hidden shadow-sm border border-earth-100 group block cursor-pointer transition-transform hover:-translate-y-1"
                  >
                    <div className="aspect-video bg-earth-100 relative overflow-hidden">
                      <img 
                        src={video.img} 
                        alt="YouTube Thumbnail" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://picsum.photos/seed/yt-fallback-${i}/800/450`;
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/30 transition-colors">
                        <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform">
                          <Youtube size={24} />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h5 className="font-bold text-earth-900 mb-2 line-clamp-1 group-hover:text-forest-600 transition-colors">{video.title}</h5>
                      <p className="text-sm text-earth-500">{video.stats}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-earth-900 mb-8">Ikuti Kami di Media Sosial</h2>
          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/pasar_keramat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-earth-700 group-hover:bg-forest-600 group-hover:text-white transition-all shadow-lg">
                <Instagram size={28} />
              </div>
              <span className="text-sm font-bold text-earth-600">Instagram</span>
            </a>
            <a href="https://www.tiktok.com/@pasarkeramat_?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-earth-700 group-hover:bg-forest-600 group-hover:text-white transition-all shadow-lg">
                <TikTok size={28} />
              </div>
              <span className="text-sm font-bold text-earth-600">TikTok</span>
            </a>
            <a href="https://youtube.com/@pasar_keramat?si=T8rRS-esvf-6wFlB" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 group">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-earth-700 group-hover:bg-forest-600 group-hover:text-white transition-all shadow-lg">
                <Youtube size={28} />
              </div>
              <span className="text-sm font-bold text-earth-600">Youtube</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

import { motion } from 'motion/react';

const HistoryPage = () => {
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
            Sejarah <span className="text-forest-600">Pasar Keramat</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-earth-700 max-w-3xl mx-auto"
          >
            Menelusuri jejak langkah dan dedikasi kami dalam menjaga kearifan lokal Mojokerto dari masa ke masa.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <h2 className="text-3xl font-bold text-earth-900 mb-6">Cerita Kami</h2>
              <div className="space-y-4 text-earth-700 leading-relaxed text-lg">
                <p>
                  Pasar Keramat Mojokerto berawal dari sebuah keinginan sederhana: menyelamatkan tradisi pasar tumpah yang hampir punah. Terletak di kawasan bersejarah, pasar ini telah menjadi saksi bisu perkembangan ekonomi masyarakat Mojokerto selama lebih dari dua dekade.
                </p>
                <p>
                  Pada tahun 2020, komunitas lokal berinisiatif untuk merevitalisasi pasar ini. Bukan dengan mengganti bangunannya dengan beton modern, melainkan dengan memperkuat identitas tradisionalnya sambil meningkatkan standar pelayanan dan kebersihan.
                </p>
                <p>
                  Kini, Pasar Keramat bukan hanya tempat transaksi jual beli, melainkan ruang publik di mana budaya, seni, dan ekonomi bersatu dalam harmoni yang indah.
                </p>
                <p>
                  Keunikan sistem transaksi menggunakan koin kayu menjadi salah satu daya tarik utama yang kami pertahankan untuk menghidupkan kembali nuansa pasar tempo dulu, memberikan pengalaman nostalgia yang tak terlupakan bagi setiap pengunjung.
                </p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <img 
                src="https://picsum.photos/seed/history-page/800/800" 
                alt="History of Pasar Keramat" 
                className="rounded-[2rem] shadow-2xl w-full object-cover aspect-square"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section (Optional but good for history page) */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">Garis Waktu Perjalanan</h2>
            <p className="text-earth-600">Momen-momen penting dalam perkembangan Pasar Keramat.</p>
          </div>
          <div className="space-y-12">
            {[
              { year: "2000", title: "Awal Mula", desc: "Pasar tumpah tradisional mulai terbentuk secara organik di kawasan Keramat." },
              { year: "2010", title: "Pusat Ekonomi", desc: "Menjadi titik kumpul utama pedagang lokal dari berbagai desa di Mojokerto." },
              { year: "2020", title: "Revitalisasi", desc: "Inisiasi komunitas untuk menata ulang pasar dengan konsep wisata budaya." },
              { year: "2024", title: "Destinasi Unggulan", desc: "Diakui sebagai salah satu destinasi wisata budaya terfavorit di Jawa Timur." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row gap-8 items-start"
              >
                <div className="text-4xl font-bold text-forest-600 md:w-32 shrink-0">{item.year}</div>
                <div className="bg-white p-8 rounded-3xl border border-earth-100 shadow-sm flex-grow">
                  <h3 className="text-xl font-bold text-earth-900 mb-2">{item.title}</h3>
                  <p className="text-earth-700">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoryPage;

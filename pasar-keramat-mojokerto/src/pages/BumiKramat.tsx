import { motion } from 'motion/react';
import { Music, Palette, Users } from 'lucide-react';

const BumiKramatPage = () => {
  const initiatives = [
    { icon: <Music size={32} />, title: "Gamelan & Karawitan", desc: "Pelatihan rutin seni musik tradisional Jawa Timur yang mengharmonikan jiwa dan raga." },
    { icon: <Palette size={32} />, title: "Seni Tari & Wayang", desc: "Wadah bagi generasi muda untuk mempelajari gerak tari klasik dan filosofi pewayangan." },
    { icon: <Users size={32} />, title: "Kolaborasi Budaya", desc: "Pertunjukan gabungan antar sanggar untuk mempererat silaturahmi seniman Jawa Timur." },
  ];

  return (
    <div className="pt-32">
      {/* Header */}
      <section className="section-padding bg-forest-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://static.promediateknologi.id/crop/0x0:0x0/750x0/webp/photo/p1/882/2023/11/18/d6249e0c-4ebd-4d27-9df4-6e62660f5f23-2037980030.jpeg" 
            alt="Art Studio Background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Bumi <span className="text-forest-400">Kramat</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 max-w-3xl mx-auto"
          >
            Pusat pelestarian dan pengembangan beragam kesenian tradisional Jawa Timur di jantung Pasar Keramat.
          </motion.p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-earth-900 mb-6">Warisan Seni Jawa Timur</h2>
              <p className="text-lg text-earth-700 leading-relaxed mb-8">
                Di Pasar Keramat, kami menyediakan ruang bagi berbagai sanggar kesenian untuk tumbuh dan berkembang. Kami percaya bahwa seni adalah identitas bangsa yang harus terus dihidupkan melalui praktik nyata dan regenerasi seniman muda.
              </p>
              <div className="space-y-6">
                {initiatives.map((item, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-earth-50 rounded-3xl border border-earth-100">
                    <div className="text-forest-600 shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-earth-900 mb-2">{item.title}</h3>
                      <p className="text-earth-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://picsum.photos/seed/javanese-dance/800/1000" 
                alt="Javanese Traditional Dance" 
                className="rounded-[2rem] shadow-2xl w-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Action Section */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">Ragam Kesenian Kami</h2>
            <p className="text-earth-600">Berbagai bentuk ekspresi budaya yang dapat Anda temukan dan pelajari.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Reog Ponorogo", desc: "Pertunjukan seni barongan yang megah dan penuh semangat, rutin ditampilkan pada acara-acara besar pasar." },
              { title: "Wayang Kulit", desc: "Pertunjukan bayangan yang sarat akan nilai moral dan filosofi hidup, dibawakan oleh dalang-dalang berbakat." },
              { title: "Tari Gandrung", desc: "Tarian khas Banyuwangi yang melambangkan rasa syukur dan keramah-tamahan masyarakat Jawa Timur." },
              { title: "Ludruk Mojokerto", desc: "Seni teater rakyat yang komunikatif dan menghibur, mengangkat cerita kehidupan sehari-hari dengan dialek lokal." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-3xl border border-earth-100 shadow-sm"
              >
                <h3 className="text-xl font-bold text-forest-600 mb-4">{item.title}</h3>
                <p className="text-earth-700 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BumiKramatPage;

import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Instagram, Youtube, ChevronRight, Music2 as TikTok } from 'lucide-react';

const ContactPage = () => {
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
            Hubungi <span className="text-forest-400">Kami</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 max-w-3xl mx-auto"
          >
            Kami selalu terbuka untuk pertanyaan, saran, atau kerja sama. Mari terhubung!
          </motion.p>
        </div>
      </section>

      {/* 1. Informasi Kontak */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">Informasi Kontak</h2>
            <p className="text-earth-600">Hubungi kami secara langsung melalui saluran komunikasi kami.</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-forest-900 p-12 rounded-[3rem] text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-8">Mari Bicara!</h3>
              <p className="text-white/70 text-lg mb-12">
                Apakah Anda memiliki rencana kolaborasi atau hanya ingin menyapa? Tim kami siap melayani Anda dengan sepenuh hati.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-forest-400">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-bold uppercase tracking-wider">WhatsApp</p>
                    <p className="text-xl font-bold">+62 812 3456 7890</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-forest-400">
                    <Mail size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-white/50 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-xl font-bold">halo@pasarkeramat.id</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-8">
              <div className="bg-earth-50 p-10 rounded-[3rem] border border-earth-100">
                <h4 className="text-xl font-bold text-earth-900 mb-4">Jam Operasional</h4>
                <div className="space-y-3">
                  <div className="flex justify-between border-b border-earth-200 pb-2">
                    <span className="text-earth-600">Minggu (Pasar Kliwon)</span>
                    <span className="font-bold text-forest-700">06:00 - 12:00</span>
                  </div>
                  <div className="flex justify-between border-b border-earth-200 pb-2">
                    <span className="text-earth-600">Senin - Sabtu (Wisata)</span>
                    <span className="font-bold text-earth-900">08:00 - 16:00</span>
                  </div>
                  <p className="text-sm text-earth-500 mt-4 italic">* Jadwal dapat berubah sesuai kegiatan budaya.</p>
                </div>
              </div>
              <div className="bg-forest-50 p-10 rounded-[3rem] border border-forest-100">
                <h4 className="text-xl font-bold text-forest-900 mb-2">Tertarik Mboyong Kami?</h4>
                <p className="text-forest-700 mb-6">Kontak kami jika tertarik mboyong kami ke tempat anda.</p>
                <a href="#" className="btn-primary inline-flex items-center gap-2">
                  Mboyong Kami <ChevronRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Sosial Media */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">Media Sosial</h2>
            <p className="text-earth-600">Terhubung dengan kami melalui platform favorit Anda.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <a 
              href="https://www.instagram.com/pasar_keramat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-white p-10 rounded-[2.5rem] border border-earth-100 flex flex-col items-center text-center hover:bg-forest-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-earth-50 rounded-2xl flex items-center justify-center text-forest-600 group-hover:bg-white/20 group-hover:text-white transition-colors mb-6 shadow-sm">
                <Instagram size={32} />
              </div>
              <h3 className="text-xl font-bold text-earth-900 group-hover:text-white mb-2 transition-colors">Instagram</h3>
              <p className="text-earth-600 group-hover:text-white/80 transition-colors">@pasar_keramat</p>
            </a>

            <a 
              href="https://www.tiktok.com/@pasarkeramat_?is_from_webapp=1&sender_device=pc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-white p-10 rounded-[2.5rem] border border-earth-100 flex flex-col items-center text-center hover:bg-forest-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-earth-50 rounded-2xl flex items-center justify-center text-forest-600 group-hover:bg-white/20 group-hover:text-white transition-colors mb-6 shadow-sm">
                <TikTok size={32} />
              </div>
              <h3 className="text-xl font-bold text-earth-900 group-hover:text-white mb-2 transition-colors">TikTok</h3>
              <p className="text-earth-600 group-hover:text-white/80 transition-colors">@pasarkeramat_</p>
            </a>

            <a 
              href="https://youtube.com/@pasar_keramat?si=T8rRS-esvf-6wFlB" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group bg-white p-10 rounded-[2.5rem] border border-earth-100 flex flex-col items-center text-center hover:bg-forest-600 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-earth-50 rounded-2xl flex items-center justify-center text-forest-600 group-hover:bg-white/20 group-hover:text-white transition-colors mb-6 shadow-sm">
                <Youtube size={32} />
              </div>
              <h3 className="text-xl font-bold text-earth-900 group-hover:text-white mb-2 transition-colors">YouTube</h3>
              <p className="text-earth-600 group-hover:text-white/80 transition-colors">Pasar Keramat</p>
            </a>
          </div>
        </div>
      </section>

      {/* 3. Kunjungi Kami */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">Kunjungi Kami</h2>
            <p className="text-earth-600">Temukan jalan menuju pengalaman budaya yang tak terlupakan.</p>
          </div>
          <div className="h-[500px] rounded-[3rem] overflow-hidden relative shadow-2xl border-4 border-white">
            <img 
              src="https://picsum.photos/seed/map/1920/1080?grayscale" 
              alt="Map Placeholder" 
              className="w-full h-full object-cover opacity-60"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-20 h-20 bg-forest-500 rounded-full animate-ping absolute inset-0 opacity-40"></div>
                <div className="w-20 h-20 bg-forest-500 rounded-full flex items-center justify-center relative shadow-2xl">
                  <MapPin size={40} className="text-white" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] border border-white max-w-sm shadow-2xl">
              <p className="text-earth-900 font-bold text-xl mb-2">Petunjuk Arah</p>
              <p className="text-earth-600 mb-6">Navigasi lebih mudah menggunakan Google Maps dengan Plus Code 9G7Q+MH.</p>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=9G7Q%2BMH+Warugunung,+Kabupaten+Mojokerto,+Jawa+Timur" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary inline-flex items-center gap-2 w-full justify-center"
              >
                Buka Google Maps <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Kirim Pesan (Contact Form) */}
      <section className="section-padding bg-earth-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-earth-900 mb-4">Kirim Pesan</h2>
            <p className="text-earth-600">Punya pertanyaan khusus? Kirimkan pesan Anda melalui form di bawah ini.</p>
          </div>
          <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-earth-100 shadow-xl">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-earth-700 ml-2 uppercase tracking-wider">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="Masukkan nama Anda" 
                    className="w-full bg-earth-50 border border-earth-100 px-6 py-4 rounded-2xl focus:outline-none focus:border-forest-500 shadow-sm transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-earth-700 ml-2 uppercase tracking-wider">Alamat Email</label>
                  <input 
                    type="email" 
                    placeholder="Masukkan email Anda" 
                    className="w-full bg-earth-50 border border-earth-100 px-6 py-4 rounded-2xl focus:outline-none focus:border-forest-500 shadow-sm transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-earth-700 ml-2 uppercase tracking-wider">Perihal</label>
                <input 
                  type="text" 
                  placeholder="Contoh: Info Tenant / Kunjungan Kelompok" 
                  className="w-full bg-earth-50 border border-earth-100 px-6 py-4 rounded-2xl focus:outline-none focus:border-forest-500 shadow-sm transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-earth-700 ml-2 uppercase tracking-wider">Pesan</label>
                <textarea 
                  rows={5}
                  placeholder="Tuliskan pesan Anda di sini..." 
                  className="w-full bg-earth-50 border border-earth-100 px-6 py-4 rounded-2xl focus:outline-none focus:border-forest-500 shadow-sm transition-colors resize-none"
                ></textarea>
              </div>
              <button className="btn-primary w-full py-5 flex items-center justify-center gap-3 text-lg font-bold group">
                Kirim Pesan Sekarang
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

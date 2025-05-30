import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div 
        className="h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(/bgroundd.jpg)'
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Tentang Kami</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            Kisah di balik Mykonos dan perjalanan kami dalam dunia parfumeri
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Cerita <span className="text-gold">Kami</span>
              </h2>
              <p className="text-gray-300 mb-4">
                Mykonos hadir sebagai simbol keharuman yang elegan, terinspirasi dari pesona pulau Mykonos di Yunani yang terkenal dengan keindahan alam, suasana romantis, dan kehidupan yang penuh warna.
                <br /> Kami percaya bahwa parfum bukan sekadar aroma—ia adalah identitas, kenangan, dan perasaan yang melekat dalam setiap momen.
              </p>
              <p className="text-gray-300 mb-4">
                Dengan memadukan bahan-bahan berkualitas tinggi dan sentuhan artistik, Mykonos Parfume diciptakan untuk mereka yang menghargai keanggunan, keaslian, dan karakter.
                <br />Setiap varian kami dirancang untuk mencerminkan sisi unik dari kepribadian Anda—baik itu kelembutan, ketegasan, misteri, atau keceriaan.
              </p>
              <p className="text-gray-300">
                Diproduksi dengan standar internasional dan formulasi eksklusif, kami berkomitmen untuk menghadirkan parfum dengan wangi yang tahan lama dan menyatu sempurna dengan karakter pemakainya.
                <br /> Dari keseharian hingga momen spesial, biarkan Mykonos menjadi bagian dari cerita hidup Anda.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="/foto.jpg" 
                alt="Pendiri AromaEssence" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="py-16 bg-purple-900/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row-reverse items-center gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Filosofi <span className="text-gold">Kami</span>
              </h2>
              <p className="text-gray-300 mb-4">
                Filosofi Mykonos Parfume berakar pada pemahaman bahwa aroma adalah bagian dari memori dan jiwa manusia. Wangi dapat membawa kita kembali ke momen-momen penting dalam hidup, membangkitkan emosi, bahkan membentuk impresi dalam sekejap. Kami melihat parfum sebagai karya seni hidup—sebuah perpaduan dari kreativitas, ketulusan, dan ekspresi diri.
              </p>
              <p className="text-gray-300 mb-4">
                Setiap aroma kami diciptakan dengan tujuan, bukan sekadar untuk menyenangkan indra penciuman, tetapi untuk menyentuh sisi terdalam dari ingatan dan rasa. Kami percaya bahwa keaslian adalah hal yang paling berharga. Oleh karena itu, kami tidak mengejar tren semata, melainkan menghadirkan karakter aroma yang orisinal dan berjiwa.
              </p>
              <p className="text-gray-300">
                Kami juga meyakini bahwa parfum yang baik tidak hanya wangi, tapi juga berbicara. Ia menyampaikan pesan, menandai kehadiran, dan membentuk kesan yang abadi. Melalui perpaduan bahan alami, esensi pilihan, dan sentuhan tangan para peracik ahli, Mykonos berkomitmen untuk selalu menyuguhkan kualitas tanpa kompromi.
              </p>
              <p className='text-gray-300'>
                Mykonos bukan hanya tentang aroma. Ini tentang rasa, tentang memori, tentang Anda. Karena kami percaya, setiap orang layak memiliki wangi yang menjadi ciri khasnya.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="/pulau.jpeg" 
                alt="Filosofi AromaEssence" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Premium Ingredients */}
      <section className="py-16 bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Bahan-bahan <span className="text-gold">Premium</span>
          </h2>
          <p className="text-gray-300 mb-8 max-w-3xl mx-auto">
            Kami hanya menggunakan bahan-bahan terbaik dari seluruh dunia untuk menciptakan parfum yang unik dan berkualitas tinggi.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img 
                src="/bahan.jpg" 
                alt="Bahan alami" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Bahan Alami</h3>
              <p className="text-gray-400">
                Kami meramu setiap parfum dengan esensi alami terbaik dari alam—mulai dari kelopak bunga segar, akar aromatik, hingga rempah-rempah pilihan. Kami percaya keindahan sejati berasal dari sumber yang murni dan alami, tanpa campuran sintetis berlebih.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img 
                src="/tradisional.jpg" 
                alt="Proses tradisional" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Proses Tradisional</h3>
              <p className="text-gray-400">
                Dalam setiap tetes parfum, ada warisan teknik lama yang telah diturunkan lintas generasi. Kami mempertahankan proses penyulingan dan pencampuran manual untuk menjaga keaslian aroma dan menciptakan harmoni yang mendalam pada setiap wangi.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img 
                src="/modern.jpg" 
                alt="Inovasi modern" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Inovasi Modern</h3>
              <p className="text-gray-400">
                Kami meramu setiap parfum dengan esensi alami terbaik dari alam—mulai dari kelopak bunga segar, akar aromatik, hingga rempah-rempah pilihan. Kami percaya keindahan sejati berasal dari sumber yang murni dan alami, tanpa campuran sintetis berlebih.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900/10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Temukan <span className="text-gold">Mykonos</span> Anda
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Jelajahi koleksi parfum premium kami dan temukan aroma yang mewakili kepribadian unik Anda.
          </p>
          <Link 
            to="/produk" 
            className="inline-flex items-center bg-gold text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gold/90 transition duration-300"
          >
            Lihat Koleksi Kami
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default About;
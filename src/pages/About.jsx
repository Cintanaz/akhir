import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div 
        className="h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)'
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Tentang Kami</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            Kisah di balik AromaEssence dan perjalanan kami dalam dunia parfumeri
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
                AromaEssence didirikan pada tahun 2015 oleh Dewi Suryani, seorang ahli parfum dengan pengalaman lebih dari 15 tahun dalam industri parfumeri internasional.
              </p>
              <p className="text-gray-300 mb-4">
                Berawal dari kecintaan terhadap aroma dan bahan-bahan alami Indonesia, Dewi bermimpi untuk menciptakan parfum premium yang menggabungkan kemewahan Barat dengan eksotisme Timur.
              </p>
              <p className="text-gray-300">
                Setelah bertahun-tahun mengembangkan formula dan mencari bahan-bahan terbaik dari seluruh dunia, AromaEssence akhirnya lahir sebagai brand parfum premium Indonesia yang kini dikenal dengan kualitas dan keunikan aromanya.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3059456/pexels-photo-3059456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
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
                Di AromaEssence, kami percaya bahwa parfum bukan hanya aksesori, tetapi merupakan perpanjangan dari kepribadian dan ekspresi diri. Setiap aroma memiliki cerita dan emosi yang unik.
              </p>
              <p className="text-gray-300 mb-4">
                Kami berkomitmen untuk menggunakan bahan-bahan alami berkualitas tertinggi, dipilih secara etis dan berkelanjutan dari seluruh dunia. Proses produksi kami menghormati tradisi parfumeri klasik sambil mengadopsi inovasi modern.
              </p>
              <p className="text-gray-300">
                Setiap botol AromaEssence adalah perpaduan sempurna antara seni, sains, dan passion — dirancang untuk memberikan pengalaman sensori yang tak terlupakan dan menjadi bagian dari momen berharga dalam hidup Anda.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src="https://images.pexels.com/photos/3018977/pexels-photo-3018977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
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
                src="https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Bahan alami" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Bahan Alami</h3>
              <p className="text-gray-400">
                Kami menggunakan bahan-bahan alami terbaik, dari bunga langka hingga kayu eksotis, untuk menciptakan aroma yang autentik dan bertahan lama.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.pexels.com/photos/7713104/pexels-photo-7713104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Proses tradisional" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Proses Tradisional</h3>
              <p className="text-gray-400">
                Setiap parfum dibuat menggunakan metode tradisional yang telah disempurnakan selama berabad-abad, memastikan kualitas dan kedalaman aroma yang tak tertandingi.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img 
                src="https://images.pexels.com/photos/4219654/pexels-photo-4219654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Inovasi modern" 
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-serif font-semibold text-white mb-2">Inovasi Modern</h3>
              <p className="text-gray-400">
                Kami menggabungkan tradisi dengan teknologi modern untuk menciptakan formula parfum yang unik, stabil, dan dapat bertahan lama di kulit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-900/10 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-serif font-bold text-white mb-6">
            Temukan <span className="text-gold">Aroma Signature</span> Anda
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
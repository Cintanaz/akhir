import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard.jsx';
import NewsletterForm from '../components/NewsletterForm.jsx';
import ProductCard from '../components/ProductCard.jsx';

function Home() {
  // Featured products
  const featuredProducts = [
    {
      id: 1,
      name: 'Mykonos Vanilla Clouds Eau De Parfum',
      price: 320000,
      image: 'baseseller1.png',
      description: 'Aroma mewah dengan sentuhan lavender dan kayu cedar'
    },
    {
      id: 2,
      name: 'Mykonos Enchanted Extrait De Parfum',
      price: 190000,
      image: 'baseseller2.png',
      description: 'Wangi bunga yang menenangkan dengan sentuhan musk'
    },
    {
      id: 3,
      name: 'Mykonos Aphrodite Eau De Parfum',
      price: 190000,
      image: 'baseseller3.png',
      description: 'Parfum premium dengan aroma oud dan amber yang eksotis'
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/3321416/pexels-photo-3321416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
            Lepaskan <span className="text-gold">Aroma Signature</span> Anda
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Koleksi parfum premium dengan bahan-bahan alami terbaik untuk menemani setiap momen berharga Anda.
          </p>
          <Link 
            to="/produk" 
            className="inline-flex items-center bg-gold text-gray-900 px-8 py-3 rounded-md font-medium hover:bg-gold/90 transition duration-300"
          >
            Belanja Sekarang
            <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white">
              Koleksi <span className="text-gold">Unggulan</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Temukan aroma signature Anda dengan koleksi unggulan kami yang dibuat dengan penuh ketelitian.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/produk"
              className="inline-flex items-center text-gold hover:text-gold/80 font-medium"
            >
              Lihat Semua Produk
              <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-purple-900/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img 
                src="pp.jpg" 
                alt="Proses pembuatan parfum" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-serif font-bold text-white mb-6">
                Dibuat dengan <span className="text-gold">Keahlian & Passion</span>
              </h2>
              <p className="text-gray-300 mb-6">
                Mykonos didirikan dengan satu tujuan: menciptakan parfum premium yang menyatukan keindahan alam dan seni pembuatan parfum.
              </p>
              <p className="text-gray-300 mb-8">
                Setiap parfum kami dirancang oleh ahli parfum terkemuka, menggunakan bahan-bahan alami terbaik yang dipilih dari seluruh dunia.
              </p>
              <Link 
                to="/tentang-kami" 
                className="inline-flex items-center text-gold hover:text-gold/80 font-medium"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white">
              Apa Kata <span className="text-gold">Pelanggan Kami</span>
            </h2>
            <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
              Pengalaman nyata dari pelanggan yang telah menemukan aroma signature mereka dengan AromaEssence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard 
              name="Sari Wijaya"
              role="Beauty Influencer"
              image="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              testimonial="vanilla Clouds Elegance menjadi parfum favorit saya untuk acara formal. Aromanya bertahan lama dan selalu mendapat pujian!"
            />
            <TestimonialCard 
              name="Budi Santoso"
              role="Executive"
              image="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              testimonial="Exchanted dari Mykonos benar-benar mencerminkan kemewahan. Menjadi signature scent saya untuk pertemuan bisnis."
            />
            <TestimonialCard 
              name="Anita Permata"
              role="Fashion Designer"
              image="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
              testimonial="Aphrodite sempurna untuk penggunaan sehari-hari. Wanginya lembut namun tetap meninggalkan kesan mendalam."
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-purple-900/10">
        <div className="container mx-auto px-4">
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}

export default Home;
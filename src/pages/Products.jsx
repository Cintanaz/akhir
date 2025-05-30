import { useState } from 'react';
import ProductCard from '../components/ProductCard.jsx';
import { Search, Filter } from 'lucide-react';

function Products() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Product data
  const products = [
    {
      id: 1,
      name: 'Mykonos Vanilla Clouds Eau De Parfum',
      price: 320000,
      image: 'baseseller1.png',
      description: 'Aroma mewah dengan sentuhan lavender dan kayu cedar',
      category: 'signature'
    },
    {
      id: 2,
      name: 'Mykonos Enchanted Extrait De Parfum',
      price: 199000,
      image: 'baseseller2.png',
      description: 'Wangi bunga yang menenangkan dengan sentuhan musk',
      category: 'floral'
    },
    {
      id: 3,
      name: 'Mykonos Aphrodite Eau De Parfum',
      price: 199000,
      image: 'baseseller3.png',
      description: 'Parfum premium dengan aroma oud dan amber yang eksotis',
      category: 'signature'
    },
    {
      id: 4,
      name: 'mykonos Glitch',
      price: 300000,
      image: 'mykonos1.png',
      description: 'Wangi mawar yang elegan dengan sentuhan vanila',
      category: 'floral'
    },
    {
      id: 5,
      name: 'Mykonos California',
      price: 300000,
      image: 'mykonos2.jpg',
      description: 'Kesegaran laut dengan aroma citrus yang menyegarkan',
      category: 'fresh'
    },
    {
      id: 6,
      name: 'Mykonos dark Secret',
      price: 230000,
      image: 'mykonos3.jpg',
      description: 'Aroma kayu yang hangat dengan sentuhan amber dan vanila',
      category: 'woody'
    },
    {
      id: 7,
      name: 'Mykonos Baby Love',
      price: 230000,
      image: 'mykonos4.jpg',
      description: 'Aroma segar dari perpaduan jeruk dan bergamot',
      category: 'fresh'
    },
    {
      id: 8,
      name: 'Mykonos jynx',
      price: 190000,
      image: 'mykonos5.jpg',
      description: 'Aroma musk yang misterius dengan sentuhan bunga',
      category: 'woody'
    },
    {
      id: 9,
      name: 'Mykonos Xoxo rosy',
      price: 200000,
      image: 'mykonos6.jpg',
      description: 'Perpaduan bunga dan herbal yang menyegarkan',
      category: 'floral'
    }
  ];

  // Categories
  const categories = [
    { id: 'all', name: 'Semua' },
    { id: 'signature', name: 'Signature' },
    { id: 'floral', name: 'Floral' },
    { id: 'woody', name: 'Woody' },
    { id: 'fresh', name: 'Fresh' }
  ];

  // Filter products
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div 
        className="h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)'
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Koleksi Parfum</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            Temukan aroma yang mewakili kepribadian Anda dari koleksi parfum premium kami
          </p>
        </div>
      </div>

      {/* Product Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Cari parfum..."
              className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-3.5 text-gray-400" size={18} />
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-gray-400 flex items-center">
              <Filter size={18} className="mr-1" /> Filter:
            </span>
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`px-3 py-1.5 rounded-md text-sm ${
                    activeCategory === category.id 
                      ? 'bg-gold text-gray-900' 
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">Tidak ada produk yang ditemukan.</p>
            <button 
              className="mt-4 text-gold hover:text-gold/80 underline"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
            >
              Reset filter
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
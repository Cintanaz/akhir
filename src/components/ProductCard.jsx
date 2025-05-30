import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';

function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  
  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <div 
      className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-semibold text-white mb-2">{product.name}</h3>
        <p className="text-gray-400 text-sm mb-3">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-gold font-medium">{formatPrice(product.price)}</span>
          <button className="flex items-center bg-purple-800/50 hover:bg-purple-800 text-white px-3 py-2 rounded-md transition duration-300">
            <ShoppingCart size={16} className="mr-1" />
            <span>Tambah</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
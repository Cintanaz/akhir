import { useState } from 'react';
import { Send } from 'lucide-react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      setError('Email diperlukan');
      return;
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Format email tidak valid');
      return;
    }
    
    // In a real app, you would submit to an API here
    setIsSubmitted(true);
    setError('');
    setEmail('');
  };

  return (
    <div className="bg-gray-900 rounded-lg shadow-lg p-8 md:p-12 max-w-3xl mx-auto">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif font-bold text-white mb-3">
          Dapatkan <span className="text-gold">Inspirasi & Penawaran Eksklusif</span>
        </h3>
        <p className="text-gray-400">
          Berlangganan newsletter kami untuk mendapatkan informasi terbaru tentang produk dan penawaran spesial.
        </p>
      </div>

      {isSubmitted ? (
        <div className="text-center p-6 bg-green-900/20 rounded-lg">
          <p className="text-green-400 text-lg">Terima kasih telah berlangganan!</p>
          <p className="text-gray-400 mt-2">Anda akan menerima update terbaru dari kami.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="email"
                placeholder="Alamat email Anda"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {error && (
                <p className="text-red-400 text-sm mt-1">{error}</p>
              )}
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-gray-900 rounded-md font-medium flex items-center justify-center hover:bg-gold/90 transition duration-300"
            >
              <span>Berlangganan</span>
              <Send size={16} className="ml-2" />
            </button>
          </div>
          <p className="text-xs text-gray-500 text-center mt-4">
            Dengan berlangganan, Anda menyetujui Kebijakan Privasi kami dan menerima komunikasi pemasaran dari AromaEssence.
          </p>
        </form>
      )}
    </div>
  );
}

export default NewsletterForm;
import { useState } from 'react';
import { MapPin, Mail, Phone, Send } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Nama diperlukan';
    if (!formData.email.trim()) newErrors.email = 'Email diperlukan';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Format email tidak valid';
    if (!formData.subject.trim()) newErrors.subject = 'Subjek diperlukan';
    if (!formData.message.trim()) newErrors.message = 'Pesan diperlukan';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    
    if (Object.keys(newErrors).length === 0) {
      // In a real app, you would submit to an API here
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Banner */}
      <div 
        className="h-64 flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/4219058/pexels-photo-4219058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750)'
        }}
      >
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Hubungi Kami</h1>
          <p className="text-gray-300 max-w-lg mx-auto">
            Kami siap membantu Anda dengan pertanyaan, saran, atau kebutuhan informasi lainnya
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info */}
          <div className="w-full md:w-1/3 space-y-8">
            <div>
              <h2 className="text-2xl font-serif font-bold text-white mb-6">
                Informasi <span className="text-gold">Kontak</span>
              </h2>
              <p className="text-gray-300 mb-8">
                Kami senang mendengar dari Anda. Hubungi kami melalui salah satu kontak di bawah ini atau melalui formulir kontak.
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <div className="flex items-start mb-6">
                <MapPin className="text-gold mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-white mb-1">Alamat</h3>
                  <p className="text-gray-400">
                    Jl. Aroma Indah No. 123<br />
                    Jakarta Selatan, 12345<br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start mb-6">
                <Mail className="text-gold mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-white mb-1">Email</h3>
                  <p className="text-gray-400">
                    customer@aromaessence.id<br />
                    info@aromaessence.id
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-gold mr-4 mt-1" size={20} />
                <div>
                  <h3 className="font-medium text-white mb-1">Telepon</h3>
                  <p className="text-gray-400">
                    +62 812 3456 7890<br />
                    +62 21 7654 3210
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <h3 className="font-medium text-white mb-3">Jam Operasional</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex justify-between">
                  <span>Senin - Jumat</span>
                  <span>09.00 - 17.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span>10.00 - 15.00</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu</span>
                  <span>Tutup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-serif font-bold text-white mb-6">
              Kirim <span className="text-gold">Pesan</span>
            </h2>

            {isSubmitted ? (
              <div className="bg-green-900/20 border border-green-800 rounded-lg p-8 text-center">
                <h3 className="text-xl font-medium text-white mb-2">Terima Kasih!</h3>
                <p className="text-gray-300">
                  Pesan Anda telah kami terima. Tim kami akan segera menghubungi Anda.
                </p>
              </div>
            ) : (
              <div className="bg-gray-900 p-6 md:p-8 rounded-lg shadow-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-800 border ${errors.name ? 'border-red-400' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white`}
                      />
                      {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-gray-800 border ${errors.email ? 'border-red-400' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white`}
                      />
                      {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                      Subjek
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800 border ${errors.subject ? 'border-red-400' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white`}
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                      Pesan
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-800 border ${errors.message ? 'border-red-400' : 'border-gray-700'} rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50 text-white`}
                    ></textarea>
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 bg-gold text-gray-900 rounded-md font-medium flex items-center justify-center hover:bg-gold/90 transition duration-300"
                  >
                    <span>Kirim Pesan</span>
                    <Send size={16} className="ml-2" />
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-950 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-serif font-bold text-white mb-8 text-center">
            Kunjungi <span className="text-gold">Toko Kami</span>
          </h2>
          <div className="h-96 bg-gray-800 rounded-lg overflow-hidden">
            {/* In a real application, you would embed a Google Map here */}
            <div className="w-full h-full flex items-center justify-center bg-gray-900">
              <div className="text-center">
                <MapPin className="text-gold mb-4 mx-auto" size={40} />
                <p className="text-white text-lg font-medium">AromaEssence Flagship Store</p>
                <p className="text-gray-400">Jl. Aroma Indah No. 123, Jakarta Selatan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
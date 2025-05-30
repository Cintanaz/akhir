import { NavLink } from 'react-router-dom';
import { SprayCan as Spray, Instagram, Facebook, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-gold">
              <Spray size={24} />
              <span className="text-xl font-serif font-bold">AromaEssence</span>
            </div>
            <p className="text-sm text-gray-400">
              Lepaskan aroma signature Anda dengan koleksi parfum premium kami yang dibuat dengan bahan-bahan alami terbaik.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-gold transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold font-serif">Halaman</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-sm text-gray-400 hover:text-gold transition">
                  Beranda
                </NavLink>
              </li>
              <li>
                <NavLink to="/produk" className="text-sm text-gray-400 hover:text-gold transition">
                  Produk
                </NavLink>
              </li>
              <li>
                <NavLink to="/tentang-kami" className="text-sm text-gray-400 hover:text-gold transition">
                  Tentang Kami
                </NavLink>
              </li>
              <li>
                <NavLink to="/kontak" className="text-sm text-gray-400 hover:text-gold transition">
                  Kontak
                </NavLink>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold font-serif">Informasi</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-gold transition">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-gold transition">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-gold transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-400 hover:text-gold transition">
                  Pengiriman
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gold font-serif">Kontak</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-400">
                Jl. Aroma Indah No. 123, Jakarta
              </li>
              <li className="text-sm text-gray-400">
                customer@aromaessence.id
              </li>
              <li className="text-sm text-gray-400">
                +62 812 3456 7890
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AromaEssence. Semua Hak Dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
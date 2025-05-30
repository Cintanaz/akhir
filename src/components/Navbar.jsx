import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, SprayCan as Spray } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <NavLink
            to="/"
            className="flex items-center space-x-2 text-gold hover:text-gold/80 transition"
          >
            <Spray size={24} className="text-gold" />
            <span className="text-xl font-light">MYKONOS</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition hover:text-gold ${
                  isActive ? 'text-gold' : 'text-gray-100'
                }`
              }
            >
              Beranda
            </NavLink>
            <NavLink
              to="/produk"
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition hover:text-gold ${
                  isActive ? 'text-gold' : 'text-gray-100'
                }`
              }
            >
              Produk
            </NavLink>
            <NavLink
              to="/tentang-kami"
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition hover:text-gold ${
                  isActive ? 'text-gold' : 'text-gray-100'
                }`
              }
            >
              Tentang Kami
            </NavLink>
            <NavLink
              to="/kontak"
              className={({ isActive }) =>
                `text-sm uppercase tracking-wider transition hover:text-gold ${
                  isActive ? 'text-gold' : 'text-gray-100'
                }`
              }
            >
              Kontak
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-100 hover:text-gold focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-gray-900/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isOpen ? 'max-h-64 py-4' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `py-2 text-sm uppercase tracking-wider transition hover:text-gold ${
                isActive ? 'text-gold' : 'text-gray-100'
              }`
            }
          >
            Beranda
          </NavLink>
          <NavLink
            to="/produk"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `py-2 text-sm uppercase tracking-wider transition hover:text-gold ${
                isActive ? 'text-gold' : 'text-gray-100'
              }`
            }
          >
            Produk
          </NavLink>
          <NavLink
            to="/tentang-kami"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `py-2 text-sm uppercase tracking-wider transition hover:text-gold ${
                isActive ? 'text-gold' : 'text-gray-100'
              }`
            }
          >
            Tentang Kami
          </NavLink>
          <NavLink
            to="/kontak"
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `py-2 text-sm uppercase tracking-wider transition hover:text-gold ${
                isActive ? 'text-gold' : 'text-gray-100'
              }`
            }
          >
            Kontak
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


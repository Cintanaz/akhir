import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import Products from './pages/Products.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="produk" element={<Products />} />
        <Route path="tentang-kami" element={<About />} />
        <Route path="kontak" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
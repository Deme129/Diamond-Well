import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import ServiceAreas from './pages/ServiceAreas';
import AreaDetail from './pages/AreaDetail';
import Reviews from './pages/Reviews';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import ThankYou from './pages/ThankYou';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="service-areas" element={<ServiceAreas />} />
          <Route path="service-areas/:slug" element={<AreaDetail />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
        </Route>
      </Routes>
    </Router>
  );
}

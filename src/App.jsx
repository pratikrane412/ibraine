import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Homepage from "./pages/Homepage/Homepage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Servicespage from "./pages/Servicespage/Servicespage";

// Check this path carefully against your actual folder!
import ServiceDetail from './pages/ServiceDetail/ServiceDetail';
import Clientelepage from './pages/Clientelepage/Clientelepage'
import CaseStudiespage from './pages/CaseStudiespage/CaseStudiespage';
import Contactpage from "./pages/Contactpage/Contactpage";
import BlogPage from './pages/BlogPage/BlogPage';
import ThankYouPage from './pages/ThankYouPage/Thankyou';
import Dashboardpage from './pages/Dashboardpage/Dashboardpage';
import RequestQuote from './pages/RequestQuote/RequestQuote';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicespage />} />

        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/clientele" element={<Clientelepage />} />
        <Route path="/case-studies" element={<CaseStudiespage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/request-quote" element={<RequestQuote />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/dashboard" element={<Dashboardpage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
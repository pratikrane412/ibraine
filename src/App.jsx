import { Routes, Route } from 'react-router-dom';

import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import Homepage from "./pages/Homepage/Homepage";
import Aboutpage from "./pages/Aboutpage/Aboutpage";
import Servicespage from "./pages/Servicespage/Servicespage";

// Check this path carefully against your actual folder!
import PerformanceMarketing from './pages/PerformanceMarketing/PerformanceMarketing'; 
import SEMExperts from './pages/SEMExperts/SEMExperts';
import SEOServices from './pages/SEOServices/SEOServices';
import SocialMediaMarketing from './pages/SocialMediaMarketing/SocialMediaMarketing';
import GoogleAnalytics from './pages/GoogleAnalyticspage/GoogleAnalytics';
import AffiliateMarketing from './pages/AffiliateMarketingpage/AffiliateMarketing';
import WebsiteDesign from './pages/WebsiteDesignpage/WebsiteDesign';
import UIUX from './pages/UIUX/UIUX';
import GoogleTagManager from './pages/GoogleTagManager/GoogleTagManager';
import CRO from './pages/CRO/CRO';
import ContentWriting from './pages/ContentWriting/ContentWriting';
import GraphicDesign from './pages/GraphicDesign/GraphicDesign';
import VideoProduction from './pages/VideoProduction/VideoProduction';
import Clientelepage from './pages/Clientelepage/Clientelepage'
import CaseStudiespage from './pages/CaseStudiespage/CaseStudiespage';
import Contactpage from "./pages/Contactpage/Contactpage";
import BlogPage from './pages/BlogPage/BlogPage';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop /> 
      <Navbar />

      <Routes>
        <Route path="/home" element={<Homepage />} />  
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/services" element={<Servicespage />} />
        
        <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
        
        {/* COMMENT THIS OUT IF THE FILE DOES NOT EXIST YET: */}
        <Route path="/services/sem-experts" element={<SEMExperts />} />
        <Route path="/services/seo-services" element={<SEOServices />} /> 
        <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/services/google-analytics" element={<GoogleAnalytics />} />
        <Route path="/services/affiliate-marketing" element={<AffiliateMarketing />} />
        <Route path="/services/website-design" element={<WebsiteDesign />} />
        <Route path="/services/ui-ux" element={<UIUX />} />
        <Route path="/services/gtm-integration" element={<GoogleTagManager />} />
        <Route path="/services/cro" element={<CRO />} />
        <Route path="/services/content-writing" element={<ContentWriting />} />
        <Route path="/services/graphic-design" element={<GraphicDesign />} />
        <Route path="/services/reels-videos-photos" element={<VideoProduction />} />
        <Route path="/clientele" element={<Clientelepage />} />
        <Route path="/case-studies" element={<CaseStudiespage />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default App;
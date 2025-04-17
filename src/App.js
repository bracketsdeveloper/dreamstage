import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import JoinSection from './components/JoinSection';
import LabelsSection from './components/LabelsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import './styles.css';

const App = () => (
  <div className="min-h-screen">
    <WhatsAppFloat/>
    <Header />
    <Hero />
    <div className="page-break"></div>
    <WhySection />
    <div className="page-break"></div>
    <JoinSection />
    <div className="page-break"></div>
    <LabelsSection />
    <div className="page-break"></div>
    <TestimonialsSection />
    <div className="page-break"></div>
    <Footer />
  </div>
);

export default App;
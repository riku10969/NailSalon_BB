import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Catalog from './components/Catalog';
import Artist from './components/Artist ';
import Shop from './components/Shop';
import News from './components/News';
import NewsDetail from './components/NewsDetail';
import Footer from './components/Footer';
import { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import Coupon from './components/Coupon';
import DesignList from './components/DesignList';


export default function App() {
  const [showHero, setShowHero] = useState(false);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={
          <>
            {!showHero ? (
              <SplashScreen onFinish={() => setShowHero(true)} />
            ) : (
              <>
                <Hero />
                <About />
                <Catalog />
                <Artist />
                <Shop />
                <News />
                <Footer />
              </>
            )}
          </>
        } />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/design/:category" element={<DesignList />} />
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

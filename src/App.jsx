import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar.jsx'
import Background from './components/Background/Background.jsx';
import RoutesApp from './routes/routes';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import './index.css';

const App = () => {
  const location = useLocation();

  const heroData = [
    { text1: "Elegí", text2: "Tu camino" },
    { text1: "Manejá", text2: "La diferencia" },
    { text1: "Viví", text2: "La libertad" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroCount((count) => (count === 2 ? 0 : count + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  // Verificamos si estamos en una ruta que debe mostrar el footer
  const showFooterRoutes = ["/home", "/cars", "/myBookings", "/contact"];
  const shouldShowFooter =
    showFooterRoutes.includes(location.pathname) || location.pathname.startsWith("/car/");

  return (
    <div className="app-container">
      <Navbar />
      <RoutesApp />
      {location.pathname === '/' && (
        <>
          <Background playStatus={playStatus} heroCount={heroCount} />
          <Hero
            setPlayStatus={setPlayStatus}
            heroData={heroData[heroCount]}
            heroCount={heroCount}
            setHeroCount={setHeroCount}
            playStatus={playStatus}
          />
        </>
      )}

      {shouldShowFooter && <Footer />}
    </div>
  );
};

export default App;

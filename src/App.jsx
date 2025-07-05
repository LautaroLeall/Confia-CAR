import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './components/NavBar/NavBar.jsx';
import Background from './components/Background/Background.jsx';
import RoutesApp from './routes/routes';
import Hero from './components/Hero/Hero.jsx';
import carsData from './api/carsData';
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
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Rutas que muestran contenido especial como navbar
  const rutasConLayout = [
    "/", "/home", "/cars", "/contact",
    "/login", "/register", "/myBookings", "/myPayments"
  ];

  const debeMostrarLayout = rutasConLayout.some((ruta) =>
    location.pathname === ruta || location.pathname.startsWith("/car/")
  );

  return (
    <div className="app-container">
      {debeMostrarLayout && <Navbar />}
      <RoutesApp cars={carsData} />

      {location.pathname === "/" && debeMostrarLayout && (
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

      {/* {shouldShowFooter && <Footer />} */}
    </div>
  );
};


export default App;


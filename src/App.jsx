import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Background from './components/Background/Background.jsx';
import RoutesApp from './routes/routes';
import Hero from './components/Hero/Hero.jsx';

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

    return () => clearInterval(interval); // Limpieza
  }, []);

  return (
    <div>
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
    </div>
  );
};

export default App;

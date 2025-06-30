import { useState, useEffect } from 'react'
import Background from './components/Background/Background.jsx'
import Navbar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'
import RoutesApp from './routes/routes';

const App = () => {

  let heroData = [
    { text1: "Elegí", text2: "Tu camino" },
    { text1: "Manejá", text2: "La diferencia" },
    { text1: "Viví", text2: "La libertad" },
  ];

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => { return count === 2 ? 0 : count + 1 });
    }, 4000);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
      <RoutesApp />
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App
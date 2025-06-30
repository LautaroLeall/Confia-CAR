import { useState , useEffect } from 'react'
import Background from './components/Background/Background.jsx'
import Navbar from './components/NavBar/NavBar.jsx'
import Hero from './components/Hero/Hero.jsx'

const App = () => {

  let heroData = [
    { text1: "Dive Into", text2: "What you love" },
    { text1: "Indulge", text2: "Your passions" },
    { text1: "Give in to", text2: "Your passions" },
  ]

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
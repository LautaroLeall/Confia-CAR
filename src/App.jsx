import { useState } from 'react'
import Background from './components/Background/Background.jsx'
import Navbar from './components/NavBar/NavBar.jsx'

const App = () => {

  let heroData = [
    { text1: "Dive Into", text2: "What you love" },
    { text1: "Indulge", text2: "Your passions" },
    { text1: "Give in to", text2: "Your passions" },
  ]

  const [heroCount, setHeroCount] = useState(0);
  const [playStatus, setPlayStatus] = useState(false);
  
  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Navbar />
    </div>
  )
}

export default App


import { Link } from 'react-router-dom';
import './Hero.css'
import arrow_btn from '../../assets/inicio/arrow_btn.png'
import play_icon from '../../assets/inicio/play_icon.png'
import pause_icon from '../../assets/inicio/pause_icon.png'

const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
    return (
        <div className='hero'>
            <div className="hero-text">
                <p>
                    {heroData.text1}
                </p>
                <p>
                    {heroData.text2}
                </p>
            </div>

            <div className="hero-explore">
                <p className="m-0">
                    Explora los autos disponibles
                </p>
                <Link to="/cars" className="text-decoration-none">
                    <img src={arrow_btn} alt="arrow" />
                </Link>
            </div>

            <div className="hero-dot-play">
                <ul className="hero-dots">
                    <li className={heroCount === 0 ? "hero-dot orange" : "hero-dot"} onClick={() => setHeroCount(0)}></li>
                    <li className={heroCount === 1 ? "hero-dot orange" : "hero-dot"} onClick={() => setHeroCount(1)}></li>
                    <li className={heroCount === 2 ? "hero-dot orange" : "hero-dot"} onClick={() => setHeroCount(2)}></li>
                </ul>
                <div className="hero-play">
                    <img src={playStatus ? pause_icon : play_icon} alt="play" onClick={() => setPlayStatus(!playStatus)} />
                    <p className='m-0'>Ver el video</p>
                </div>
            </div>
        </div >
    )
}

export default Hero

import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/NavBar/NavBar.jsx'
import Home from '../components/Home/Home'
import Carousel from "../components/Cars/Carousel.jsx";
import carsData from "../api/carsData.js";
import MyBookings from '../components/MyBooks/MyBookings'
import Contact from '../components/Contact/Contact'

const RoutesApp = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cars" element={<Carousel cars={carsData} />} />
                <Route path="/myBookings" element={<MyBookings />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default RoutesApp;

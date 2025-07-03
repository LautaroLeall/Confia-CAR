import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Carousel from "../components/Cars/Carousel.jsx";
import carsData from "../api/carsData.js";
import CarDetail from '../components/CarDetail/CarDetail.jsx'
import MyBookings from '../components/MyBooks/MyBookings'
import Contact from '../components/Contact/Contact'

const RoutesApp = () => {
    return (
        <>
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cars" element={<Carousel cars={carsData} />} />
                <Route path="/car/:id" element={<CarDetail />} />
                <Route path="/myBookings" element={<MyBookings />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default RoutesApp;

import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/NavBar/NavBar.jsx'
import Home from '../components/Home/Home'
import Cars from '../components/Cars/CarCard.jsx'
import MyBookings from '../components/MyBooks/MyBookings'
import Contact from '../components/Contact/Contact'

const RoutesApp = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/myBookings" element={<MyBookings />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    )
}

export default RoutesApp;

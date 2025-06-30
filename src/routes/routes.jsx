import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home/Home'
import Cars from '../components/Cars/Cars'
import MyBookings from '../components/MyBooks/MyBookings'
import Contact from '../components/Contact/Contact'

const RoutesApp = () => {
    return (
        <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/myBookings" element={<MyBookings />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
    )
}

export default RoutesApp;
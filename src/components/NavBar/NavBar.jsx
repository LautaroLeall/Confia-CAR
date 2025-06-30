import { Link } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>
                <Link to="/">CONFIA CAR</Link>
            </div>
            <ul className="nav-menu">
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li>
                    <Link to="/cars">Cars</Link>
                </li>
                <li>
                    <Link to="/myBookings">My Bookings</Link>
                </li>
                <li className='nav-contact'>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar

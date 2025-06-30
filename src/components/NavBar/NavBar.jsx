import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='nav'>
            <div className='nav-logo'>
                <Link to="/">CONFIA CAR</Link>
            </div>
            <ul className="nav-menu">
                <li>
                    <Link to="/home">Inicio</Link>
                </li>
                <li>
                    <Link to="/cars">Autos</Link>
                </li>
                <li>
                    <Link to="/myBookings">Mis Reservas</Link>
                </li>
                <li className='nav-contact'>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;

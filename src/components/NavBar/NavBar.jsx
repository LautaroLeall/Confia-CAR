// src/components/NavBar/NavBar.jsx
import { Link } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './NavBar.css';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        <div className='nav d-flex align-items-center justify-content-between'>
            <div className='nav-logo'>
                <Link to="/">CONFIA CAR</Link>
            </div>

            <ul className="nav-menu d-flex align-items-center m-0">
                <li>
                    <Link to="/home">Inicio</Link>
                </li>
                <li>
                    <Link to="/cars">Autos</Link>
                </li>
                <li>
                    <Link to="/myBookings">Mis Reservas</Link>
                </li>
                {user && (
                    <li>
                        <Link to="/myPayments">Mis Pagos</Link>
                    </li>
                )}
                <li className='nav-contact'>
                    <Link to="/contact">Contacto</Link>
                </li>

                {/* ACCIONES DE LOGIN / LOGOUT */}
                {user ? (
                    <div className="d-flex align-items-center">
                        <button
                            onClick={logout}
                            className="btn btn-logout btn-sm"
                        >
                            Cerrar Sesión
                        </button>
                    </div>
                ) : (
                    <div className="d-flex gap-5">
                        <li className="nav-icon">
                            <Link to="/register" title="Registrarse" className="nav-icon">
                                <FaUserPlus className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-icon">
                            <Link to="/login" title="Iniciar Sesión" className="nav-icon">
                                <FaSignInAlt className="nav-icon" />
                            </Link>
                        </li>
                    </div>
                )}
            </ul>
        </div>
    );
};

export default NavBar;

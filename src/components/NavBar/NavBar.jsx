// src/components/NavBar/NavBar.jsx
import { Link, useLocation } from 'react-router-dom';
import { FaSignInAlt, FaUserPlus, FaBars } from 'react-icons/fa';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import './NavBar.css';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [animate, setAnimate] = useState(true); // Estado para reiniciar animación
    const location = useLocation(); // Para detectar cambio de ruta

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false); // Nueva función

    //  Reinicia animación en cada ruta
    useEffect(() => {
        setAnimate(false);
        const timeout = setTimeout(() => setAnimate(true), 10); // reinicia la animación
        return () => clearTimeout(timeout);
    }, [location.pathname]);

    return (
        <div className={`nav d-flex align-items-center justify-content-between ${animate ? 'fade-down' : ''}`}>
            <div className='nav-logo'>
                <Link to="/" onClick={closeMenu}>CONFIA CAR</Link> {/*  Cierra al ir al inicio */}
            </div>

            <div className="nav-toggle d-lg-none" onClick={toggleMenu}>
                <FaBars />
            </div>

            <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
                <li className="nav-item">
                    <Link to="/home" onClick={closeMenu}>Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/cars" onClick={closeMenu}>Autos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/myBookings" onClick={closeMenu}>Mis Reservas</Link>
                </li>
                {user && (
                    <li className="nav-item">
                        <Link to="/myPayments" onClick={closeMenu}>Mis Pagos</Link>
                    </li>
                )}

                <div className="contact-auth d-flex align-items-center gap-5">
                    <li className='nav-contact'>
                        <Link to="/contact" onClick={closeMenu}>Contacto</Link>
                    </li>

                    {user ? (
                        <div className="d-flex align-items-center">
                            <button
                                onClick={() => {
                                    logout();
                                    closeMenu(); // Lo cerramos al cerrar sesión (mobile)
                                }}
                                className="btn btn-logout btn-sm"
                            >
                                Cerrar Sesión
                            </button>
                        </div>
                    ) : (
                        <div className="d-flex gap-5">
                            <li className='nav-item'>
                                <Link to="/register" title="Registrarse" className="nav-icon" onClick={closeMenu}>
                                    <FaUserPlus />
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to="/login" title="Iniciar Sesión" className="nav-icon" onClick={closeMenu}>
                                    <FaSignInAlt />
                                </Link>
                            </li>
                        </div>
                    )}
                </div>
            </ul>
        </div>
    );
};

export default NavBar;

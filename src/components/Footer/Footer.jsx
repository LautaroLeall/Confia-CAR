// src/components/Footer/Footer.jsx
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer mt-auto d-flex flex-column">

            <div className="footer-content container d-flex">

                <div className="footer-section brand">
                    <h2 className="logo">CAR RENTAL</h2>
                    <p>
                        Servicio de alquiler de coches premium con una amplia selección de vehículos de lujo y de uso diario para todas sus necesidades de conducción.
                    </p>
                    <div className="social-icons d-flex gap-4">
                        <a href="https://www.linkedin.com/in/lauldp/" className='redes-link' target="_blank" rel="noreferrer">
                            <FaLinkedin />
                        </a>

                        <a href="https://www.instagram.com/lautaro_leall" className='redes-link' target="_blank" rel="noreferrer">
                            <AiFillInstagram />
                        </a>

                        <a href="https://github.com/LautaroLeall" className='redes-link' target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>

                        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=lautaroleal4@gmail.com" className='redes-link' target="_blank" rel="noreferrer">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h5>ENLACES RÁPIDOS</h5>
                    <ul>
                        <li>
                            <Link to="/">
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link to="/cars">
                                Explorar Autos
                            </Link>
                        </li>
                        <li>
                            <Link to="/myBookings">
                                Explorar Mis Reservas
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                Sobre Nosotros
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5>CONTACTO</h5>
                    <ul>
                        <li>Lautaro Leal</li>
                        <li>San Miguel de Tucuman | Argentina</li>
                        <li>+54 381 339 9463</li>
                        <li>lautaroleal4@gmail</li>
                    </ul>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2025 Lautaro Leal | Todos los derechos reservados.</p>
            </div>

        </footer>
    );
};

export default Footer;

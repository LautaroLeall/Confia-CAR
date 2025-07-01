import React from 'react';
import './Footer.css';
import { FaLinkedin  , FaInstagram, FaGithub , FaEnvelope } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="footer mt-auto d-flex flex-column">

            <div className="footer-content container d-flex">

                <div className="footer-section brand">
                    <h2 className="logo">CAR RENTAL</h2>
                    <p>
                        Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
                    </p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/lauldp/" target="_blank" rel="noreferrer">
                            <FaLinkedin  />
                        </a>

                        <a href="https://www.instagram.com/lautaro_leall" target="_blank" rel="noreferrer">
                            <AiFillInstagram />
                        </a>

                        <a href="https://github.com/LautaroLeall" target="_blank" rel="noreferrer">
                            <FaGithub />
                        </a>

                        <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=lautaroleal4@gmail.com" target="_blank" rel="noreferrer">
                            <FaEnvelope />
                        </a>
                    </div>
                </div>

                <div className="footer-section">
                    <h5>QUICK LINKS</h5>
                    <ul>
                        <li>Home</li>
                        <li>Browse Cars</li>
                        <li>List Your Car</li>
                        <li>About Us</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h5>CONTACT</h5>
                    <ul>
                        <li>1234 Luxury Drive</li>
                        <li>San Francisco, CA 94107</li>
                        <li>+1 234 567890</li>
                        <li>info@example.com</li>
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

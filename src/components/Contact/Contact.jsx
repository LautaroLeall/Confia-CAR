// src/components/Contact/Contact.jsx
import { useRef, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { AiFillInstagram } from "react-icons/ai";
import imgLau from "/public/logo/logo-lldp.png";
import "./Contact.css";

const Contact = () => {
  const [glowVisible, setGlowVisible] = useState(false);
  const [glowPosition, setGlowPosition] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const threshold = 12;

  const handleMouseMove = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - bounds.left) / bounds.width - 0.5;
    const y = (e.clientY - bounds.top) / bounds.height - 0.5;

    setTilt({ x: y * -threshold, y: x * threshold });
    setGlowPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  const handleMouseLeave = () => {
    setGlowVisible(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div className="container-contact">
      <div className="container text-center">
        <h1 className="title-contact">CONOCEME MÁS</h1>
        <div className="text-aboutMy align-items-center mb-3 fw-bold">
          <p className="mx-auto text-muted">
            Estudiante de Desarrollo y Calidad de Software en la Universidad del Norte Santo Tomás de Aquino.
            <br />
            En formación continua en desarrollo web, programación, la resolución de problemas y el trabajo en equipo. Trabajo en proyectos personales que subo a GitHub, donde experimento, aprendo y crezco como desarrollador.
            <br />
            Me motiva especialmente el trabajo en equipo. Tengo experiencia aplicando metodologías ágiles como SCRUM, lo que me permitió desarrollar habilidades en organización, comunicación y colaboración efectiva dentro de proyectos grupales.
          </p>
        </div>

        <div className="d-flex justify-content-center">
          <div
            className="card-aboutMy card glow-card text-center shadow border-0"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
            ref={cardRef}
            onMouseEnter={() => setGlowVisible(true)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {glowVisible && (
              <div
                className="glow-effect"
                style={{
                  top: glowPosition.y - 120,
                  left: glowPosition.x - 120,
                }}
              />
            )}

            <div className="card-body position-relative bg-white rounded-4 p-3">
              <div className="img-info">
                <img
                  src= { imgLau }
                  className="rounded-circle shadow mb-3"
                  style={{ width: "110px", height: "110px", objectFit: "cover" }}
                  alt="Avatar"
                />
                <div className=" d-flex flex-column justify-content-center align-items-center">
                  <h4 className="card-title fw-bold text-dark">Lautaro Leal</h4>
                  <h6 className="second-title text-primary mb-3">Software Developer</h6>
                </div>
              </div>
              <p className="card-text text-muted small px-3">
                Apasionado por el código limpio, los sistemas escalables y la solución de problemas del mundo real con software elegante.
              </p>
              <div className="d-flex justify-content-center gap-4 fs-5 mt-3">
                <a href="https://www.linkedin.com/in/lauldp/" className="hover-rise" target="_blank" rel="noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/lautaro_leall" className="hover-rise" target="_blank" rel="noreferrer">
                  < AiFillInstagram />
                </a>
                <a href="https://github.com/LautaroLeall" className="hover-rise" target="_blank" rel="noreferrer">
                  <FaGithub />
                </a>
                <a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=lautaroleal4@gmail.com" className="hover-rise" target="_blank" rel="noreferrer">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

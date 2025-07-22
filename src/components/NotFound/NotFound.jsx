// src/components/NotFound/NotFound.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import perdidoImage from "/public/404/auto_perdido.png";
import "./NotFound.css";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="notfound-container d-flex align-items-center justify-content-center">
            <div className="notfound-content text-center">
                <h1 className="neon-text">404</h1>
                <p className="notfound-message">¡Ups! Parece que esta ruta no existe</p>
                <p className="notfound-sub">¿Quizás te perdiste? Recalculando GPS...</p>

                <div className="car-wrapper">
                    <img src= {perdidoImage} className="auto-perdido" alt="auto-perdido"/>
                </div>

                <button className="btn-back" onClick={() => navigate("/")}>
                    VOLVER AL INICIO
                </button>
            </div>
        </div>
    );
};

export default NotFound;

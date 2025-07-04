// Carousel.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import "./styles.css";

const Carousel = ({ cars }) => {
    const location = useLocation();
    const { pickupLocation } = location.state || {};

    // Filtrar solo si vino state; si no, mostramos todos
    const filteredCars = pickupLocation
        ? cars.filter((c) => c.location === pickupLocation)
        : cars;

    const [stop, setStop] = useState(false);

    return (
        <div className="container-carousel">
            <div className="title">
                <h1 className="title text-center">
                    {pickupLocation
                        ? `Autos en ${pickupLocation}`
                        : "AUTOS DISPONIBLES"}
                </h1>
            </div>

            <div
                className="carousel-wrapper"
                onMouseEnter={() => setStop(true)}
                onMouseLeave={() => setStop(false)}
            >
                <div
                    className="carousel-inner d-flex gap-5"
                    style={{
                        animationPlayState: stop ? "paused" : "running",
                        animationDuration: `${filteredCars.length * 3}s`,
                    }}
                >
                    {/* Repetimos para loop infinito */}
                    {[...filteredCars, ...filteredCars].map((car, idx) => (
                        <Card key={idx} car={car} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;

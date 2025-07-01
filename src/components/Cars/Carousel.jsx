// Carousel.jsx
import React, { useState } from "react";
import Card from "./Card";
import "./styles.css";

const Carousel = ({ cars }) => {
    const [stop, setStop] = useState(false);

    return (
        <div className="container-carousel">
            <div className="title">
                <h1 className="title text-center">AUTOS DISPONIBLES</h1>
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
                        animationDuration: `${cars.length * 3}s`,
                    }}
                >
                    {[...cars, ...cars].map((car, index) => (
                        <Card key={index} car={car} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;

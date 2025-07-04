// src/components/Cars/Carousel.jsx
import React, { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Card from "./Card";
import "./styles.css";

const Carousel = ({ cars }) => {
    const location = useLocation();
    const { pickupLocation } = location.state || {};
    const filteredCars = pickupLocation
        ? cars.filter((c) => c.location === pickupLocation)
        : cars;

    const [stop, setStop] = useState(false);
    const carouselRef = useRef(null);      // referencia al contenedor
    const isDragging = useRef(false);     // estado interno drag
    const startX = useRef(0);             // posición inicial X
    const scrollLeft = useRef(0);         // scrollLeft al inicio del drag

    // Auto‑scroll con requestAnimationFrame
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        let rafId;
        const step = () => {
            if (!stop) {
                el.scrollLeft += 4;
                // loop infinito: cuando llega a la mitad,
                // vuelve a 0
                if (el.scrollLeft >= el.scrollWidth / 2) {
                    el.scrollLeft = 0;
                }
            }
            rafId = requestAnimationFrame(step);
        };
        rafId = requestAnimationFrame(step);
        return () => cancelAnimationFrame(rafId);
    }, [stop, filteredCars.length]);

    // Handlers de drag
    const onMouseDown = (e) => {
        isDragging.current = true;
        setStop(true); // pausar auto-scroll al arrastrar
        startX.current = e.pageX - carouselRef.current.offsetLeft;
        scrollLeft.current = carouselRef.current.scrollLeft;
    };

    const onMouseMove = (e) => {
        if (!isDragging.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX.current) * 1.1; // velocidad de arrastre
        carouselRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const endDrag = () => {
        isDragging.current = false;
        setStop(false); // reanudar auto-scroll
    };

    return (
        <div className="container-carousel">
            <div className="title">
                <h1 className="title text-center">
                    {pickupLocation ? `Autos en ${pickupLocation}` : "AUTOS DISPONIBLES"}
                </h1>
            </div>

            <div
                className="carousel-wrapper"
                onMouseEnter={() => setStop(true)}
                onMouseLeave={() => setStop(false)}
            >
                <div
                    className="carousel-inner d-flex gap-5"
                    ref={carouselRef}               // enlazo el ref
                    onMouseDown={onMouseDown}       // empiezo drag
                    onMouseMove={onMouseMove}       // arrastrando
                    onMouseUp={endDrag}             // suelto
                    onMouseLeave={endDrag}          // salgo del área
                >
                    {[...filteredCars, ...filteredCars].map((car, idx) => (
                        <Card key={idx} car={car} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;

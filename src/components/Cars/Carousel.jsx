// src/components/Carousel/Carousel.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import carsData from "../../api/carsData";
import CarCard from "../Cars/CarCard";
import "./Carousel.css";

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % carsData.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const visibleCars = () => {
        const result = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % carsData.length;
            result.push(carsData[index]);
        }
        return result;
    };

    return (
        <div className="carousel-wrapper">
            <motion.div className="carousel-track" whileHover={{ scale: 1.02 }}>
                {visibleCars().map((car) => (
                    <CarCard key={car.id} car={car} />
                ))}
            </motion.div>
        </div>
    );
};

export default Carousel;

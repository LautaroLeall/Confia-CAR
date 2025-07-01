// Card.jsx
import React, { useRef, useState } from "react";
import { BsPeopleFill, BsFuelPump } from "react-icons/bs";
import { FaCar, FaMapMarkerAlt } from "react-icons/fa";
import "./styles.css";

const Card = ({ car }) => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const bounds = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={ref}
      className="car-card d-flex flex-column"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {visible && (
        <div
          className="blur-spot"
          style={{ top: pos.y - 120, left: pos.x - 120 }}
        ></div>
      )}

      <div className="car-img-wrapper">
        <img
          src={car.image}
          className="car-img"
          alt={car.name}
        />
        <h6 className="price text-success">${car.price}/DAY</h6>
      </div>

      <div className="card-inner text-center">
        <h5>{car.name}</h5>
        <p className="text-primary mb-1">{car.type} - {car.year}</p>
        <div className="container-detalles">
          <div className="primer-container d-flex justify-around gap-5">
            <p className="text-description d-flex align-items-center text-center p-2">
              <BsPeopleFill />
              <p className="m-0 ps-1">{car.seats} Asientos</p>
            </p>
            <p className="text-description d-flex align-items-center text-center p-2">
              <BsFuelPump />
              <p className="m-0 ps-1">{car.fuel}</p>
            </p>
          </div>
          <div className="segundo-container d-flex justify-around gap-5">
            <p className="text-description d-flex align-items-center text-center p-2">
              <FaCar />
              <p className="m-0 ps-1">{car.transmission}</p>
            </p>
            <p className="text-description d-flex align-items-center text-center p-2">
              <FaMapMarkerAlt />
              <p className="m-0 ps-1">{car.location}</p>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Card;

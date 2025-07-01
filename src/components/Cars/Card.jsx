// Card.jsx
import React, { useRef, useState } from "react";
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
      className="car-card"
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

      <div className="card-inner text-center">
        <img
          src={car.image}
          className="rounded-circle mb-3 car-img"
          alt={car.name}
        />
        <h5>{car.name}</h5>
        <p className="text-primary mb-1">{car.type}</p>
        <small className="text-muted">
          {car.year} - {car.seats} seats
        </small>
        <p className="mt-2 text-secondary">
          {car.fuel} - {car.transmission}
        </p>
        <p className="text-muted">{car.location}</p>
        <h6 className="text-success">${car.price}</h6>
      </div>
    </div>
  );
};

export default Card;

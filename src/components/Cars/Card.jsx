// src/components/Cars/Card.jsx
import { useRef, useState } from "react";
import { BsPeopleFill, BsFuelPump } from "react-icons/bs";
import { FaCar, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./styles.css";

const Card = ({ car }) => {
  const [visible, setVisible] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const navigate = useNavigate();

  const handleMouseMove = (e) => {
    const bounds = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
  };

  return (
    <div
      ref={ref}
      className="car-card d-flex flex-column"
      onClick={() => navigate(`/car/${car.id}`)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      {visible && (
        <div
          className="blur-spot"
          style={{ top: pos.y - 120, left: pos.x - 120 }}
        />
      )}

      <div className="car-img-wrapper">
        <img src={car.image} className="car-img" alt={car.name} />
        <h6 className="price text-success">${car.price}/DAY</h6>
      </div>

      <div className="card-inner text-center">
        <h5>{car.name}</h5>
        <p className="text-primary mb-1">{car.type} - {car.year}</p>
        <div className="container-detalles">
          <div className="primer-container d-flex justify-around gap-5">
            <p className="text-description d-flex align-items-center text-center p-2">
              <BsPeopleFill />
              <span className="ps-1">{car.seats} Asientos</span>
            </p>
            <p className="text-description d-flex align-items-center text-center p-2">
              <BsFuelPump />
              <span className="ps-1">{car.fuel}</span>
            </p>
          </div>
          <div className="segundo-container d-flex justify-around gap-5">
            <p className="text-description d-flex align-items-center text-center p-2">
              <FaCar />
              <span className="ps-1">{car.transmission}</span>
            </p>
            <p className="text-description d-flex align-items-center text-center p-2">
              <FaMapMarkerAlt />
              <span className="ps-1">{car.location}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

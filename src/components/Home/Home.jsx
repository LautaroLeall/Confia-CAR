import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import './Home.css';
import carImage from '../../assets/carHome/main_car.png';

const Home = () => {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue
    // Aquí puedes manejar la lógica de búsqueda
    console.log({
      pickupLocation,
      pickupDate,
      returnDate,
    });
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1 className="title">AUTOS EN ALQUILER</h1>

        <form className="search-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="pickup-location">Lugar de Inicio</label>
            <div className="input-with-icon">
              <FaMapMarkerAlt className="input-icon" />
              <input
                id="pickup-location"
                type="text"
                placeholder="Por favor seleccione la Ubi"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="pickup-date">Fecha de Inicio</label>
            <div className="input-with-icon">
              <FaCalendarAlt className="input-icon" />
              <input
                id="pickup-date"
                type="date"
                value={pickupDate}
                onChange={(e) => setPickupDate(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="return-date">Fecha de Regreso</label>
            <div className="input-with-icon">
              <FaCalendarAlt className="input-icon" />
              <input
                id="return-date"
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="search-button">
            <FaSearch />
          </button>
        </form>

        <div className="car-image-container">
          <img src={carImage} alt="Silver luxury car" className="image-car" />
        </div>
      </div>
    </div>
  );
};

export default Home;
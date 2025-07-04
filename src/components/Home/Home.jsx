// Home.jsx
import React, { useState } from 'react';
import { FaSearch, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import carsData from '../../api/carsData';
import './Home.css';
import carImage from '/public/main_car.png';

const Home = () => {
  const navigate = useNavigate();
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [returnDate, setReturnDate] = useState('');

  // Extraemos las ubicaciones únicas
  const uniqueLocations = Array.from(
    new Set(carsData.map((c) => c.location))
  );

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones con SweetAlert2
    if (!pickupLocation) {
      return Swal.fire({
        icon: 'warning',
        title: 'Ubicación vacía',
        text: 'Por favor seleccioná una ubicación.',
      });
    }
    if (!pickupDate || !returnDate) {
      return Swal.fire({
        icon: 'warning',
        title: 'Fechas incompletas',
        text: 'Por favor completá ambas fechas.',
      });
    }
    if (pickupDate < today) {
      return Swal.fire({
        icon: 'error',
        title: 'Fecha no válida',
        text: 'La fecha de inicio no puede ser anterior a hoy.',
      });
    }
    if (returnDate <= pickupDate) {
      return Swal.fire({
        icon: 'error',
        title: 'Fecha no válida',
        text: 'La fecha de regreso debe ser posterior a la de inicio.',
      });
    }

    // Si todo ok, vamos a /cars con state
    navigate('/cars', {
      state: { pickupLocation, pickupDate, returnDate }
    });
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <h1 className="title">AUTOS EN ALQUILER</h1>

        <form className="search-form" onSubmit={handleSubmit}>
          {/* Ubicación */}
          <div className="input-group d-flex flex-column">
            <label htmlFor="pickup-location">Lugar de Inicio</label>
            <div className="input-with-icon">
              <FaMapMarkerAlt className="input-icon" />
              <select
                id="pickup-location"
                className="form-select text-center"
                value={pickupLocation}
                onChange={(e) => setPickupLocation(e.target.value)}
                required
              >
                <option value="">Seleccione tu ubicación</option>
                {uniqueLocations.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Fecha inicio */}
          <div className="input-group">
            <label htmlFor="pickup-date">Fecha de Inicio</label>
            <div className="input-with-icon">
              <FaCalendarAlt className="input-icon" />
              <input
                id="pickup-date"
                type="date"
                className="form-control"
                value={pickupDate}
                min={today}
                onChange={(e) => setPickupDate(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Fecha regreso */}
          <div className="input-group">
            <label htmlFor="return-date">Fecha de Regreso</label>
            <div className="input-with-icon">
              <FaCalendarAlt className="input-icon" />
              <input
                id="return-date"
                type="date"
                className="form-control"
                value={returnDate}
                min={pickupDate || today}
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

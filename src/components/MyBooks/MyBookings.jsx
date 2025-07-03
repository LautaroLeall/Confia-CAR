// MyBookings.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BookingContext } from "../../context/BookingContext"; // usamos el context
import "./MyBookings.css";

const MyBookings = () => {
  const { bookings, removeBooking } = useContext(BookingContext);
  const navigate = useNavigate();

  const eliminarReserva = (id, event) => {
    event.stopPropagation();

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Esta acción eliminará la reserva.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#dc3545',
      cancelButtonColor: '#6c757d',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        removeBooking(id); // eliminamos usando el context

        Swal.fire({
          icon: 'success',
          title: '¡Reserva eliminada!',
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          position: 'top-end'
        });
      }
    });
  };

  return (
    <div className="container-reservas">
      <div className="my-bookings-container">
        <h2 className="title-bookings text-center">MIS RESERVAS</h2>
        <p className="subtitle-bookings text-center">Ver y gestionar tus reservas de coches</p>

        {bookings.length === 0 ? (
          <div className="empty-bookings text-center fst-italic">
            <p>No tenés ninguna reserva todavía</p>
            <p>¡Andá a ver nuestros autos y elegí tu próxima aventura!</p>
          </div>
        ) : (
          <div className="bookings-grid d-flex flex-wrap align-items-center justify-content-center gap-5">
            {bookings.map((car) => (
              <div
                key={car.id}
                className="booking-card"
                onClick={() => navigate(`/car/${car.id}`)}
              >
                <img src={car.image} alt={car.name} className="booking-img" />
                <div className="booking-info">
                  <h5 className="text-center">{car.name}</h5>
                  <p className="text-primary mb-1 text-center">{car.type} - {car.year}</p>
                  <p className="text-success mb-1 text-center price-card">${car.price} por día</p>
                  <button
                    className="btn btn-outline-danger mt-2"
                    onClick={(event) => eliminarReserva(car.id, event)}
                  >
                    Eliminar reserva
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyBookings;

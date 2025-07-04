import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { BookingContext } from "../../context/BookingContext";
import { AuthContext } from "../../context/AuthContext";
import "./MyBookings.css";

const MyBookings = () => {
  const { bookings, removeBooking } = useContext(BookingContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const eliminarReserva = (id, event) => {
    event.stopPropagation();

    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción eliminará la reserva.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3545",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        removeBooking(id);
        Swal.fire({
          icon: "success",
          title: "¡Reserva eliminada!",
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          position: "top-end",
        });
      }
    });
  };

  const handlePagar = (car, event) => {
    event.stopPropagation();

    // Solo si está logueado, permitir pagar
    if (!user) {
      return Swal.fire({
        icon: "warning",
        title: "Iniciá sesión",
        text: "Debés iniciar sesión para pagar una reserva.",
        confirmButtonText: "Aceptar",
      });
    }

    Swal.fire({
      title: "¿Deseás confirmar el pago?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#28a745",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Sí, pagar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // 1. Guardar en localStorage
        const paidCars = JSON.parse(localStorage.getItem("paidCars")) || [];
        localStorage.setItem("paidCars", JSON.stringify([...paidCars, car]));

        // 2. Remover de reservas
        removeBooking(car.id);

        // 3. Notificación
        Swal.fire({
          icon: "success",
          title: "¡Pago realizado!",
          text: `Pagaste el alquiler de ${car.name}`,
          showConfirmButton: false,
          timer: 1500,
          toast: true,
          position: "top-end",
        });
      }
    });
  };

  return (
    <div className="container-reservas">
      <div className="my-bookings-container">
        <h2 className="title-bookings text-center">MIS RESERVAS</h2>
        <p className="subtitle-bookings text-center">
          Ver y gestionar tus reservas de coches
        </p>

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
                <div className="booking-info text-center">
                  <h5>{car.name}</h5>
                  <p className="text-primary mb-1">
                    {car.type} - {car.year}
                  </p>
                  {car.pickUpDate && car.dropOffDate && (
                    <div className="border border-secondary p-2 text-muted rounded-4 mb-2">
                      <p className="m-0">
                        <strong>{car.location}</strong>
                      </p>
                      <p className="m-0">
                        <strong>Retiro:</strong> {car.pickUpDate}
                      </p>
                      <p className="m-0">
                        <strong>Entrega:</strong> {car.dropOffDate}
                      </p>
                    </div>
                  )}
                  <div className="btn-bookings d-flex gap-4 justify-content-center">
                    <button
                      className="btn btn-outline-danger mt-2"
                      onClick={(event) => eliminarReserva(car.id, event)}
                    >
                      Eliminar
                    </button>
                    <button
                      className="btn btn-outline-success mt-2"
                      onClick={(event) => handlePagar(car, event)}
                    >
                      Pagar
                    </button>
                  </div>
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

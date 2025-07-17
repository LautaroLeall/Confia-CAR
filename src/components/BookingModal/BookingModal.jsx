// src/components/BookingModal/BookingModal.jsx
import { useState } from "react";
import "./BookingModal.css";
import Swal from "sweetalert2";

const BookingModal = ({ car, onClose, onConfirm }) => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const today = new Date().toISOString().split("T")[0];

    const handleConfirm = () => {
        if (!startDate || !endDate) {
            Swal.fire("Campos incompletos", "Por favor seleccioná ambas fechas.", "warning");
            return;
        }

        if (new Date(endDate) <= new Date(startDate)) {
            Swal.fire("Fechas inválidas", "La fecha de entrega debe ser posterior a la de retiro.", "error");
            return;
        }

        const carConFechas = {
            ...car,
            pickUpDate: startDate,
            dropOffDate: endDate,
        };

        onConfirm(carConFechas); // Llama al handler del padre
    };

    return (
        <div className="modal-overlay">
            <div className="booking-modal animate__animated animate__fadeInDown">
                <h3 className="title-modal text-center mb-3">Reservá tu {car.name}</h3>

                <div className="formulario-modal d-flex flex-column align-items-center">
                    <label className="form-label">Fecha de Retiro</label>
                    <input
                        type="date"
                        className="form-control fecha-modal mb-3 w-50 text-center"
                        min={today}
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />

                    <label className="form-label">Fecha de Entrega</label>
                    <input
                        type="date"
                        className="form-control fecha-modal mb-4 w-50 text-center"
                        min={startDate || today}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>

                <div className="d-flex justify-content-center gap-4">
                    <button className="btn btn-modal btn-outline-secondary" onClick={onClose}>
                        CANCELAR
                    </button>
                    <button className="btn btn-modal btn-outline-success" onClick={handleConfirm}>
                        CONFIRMAR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;

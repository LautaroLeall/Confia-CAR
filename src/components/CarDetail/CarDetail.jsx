// src/components/CarDetail/CarDetail.jsx
import { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import carsData from "../../api/carsData";
import { BookingContext } from "../../context/BookingContext";
import { BsPeopleFill, BsFuelPump } from "react-icons/bs";
import { FaCar, FaMapMarkerAlt } from "react-icons/fa";
import BookingModal from "../BookingModal/BookingModal";
import "./CarDetail.css";

const CarDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { bookings, addBooking } = useContext(BookingContext);
    const [showModal, setShowModal] = useState(false);

    const car = carsData.find((c) => c.id === parseInt(id));
    if (!car) return <h2 className="text-center mt-5">Auto no encontrado 🚫</h2>;

    const yaExiste = bookings.some((b) => b.id === car.id);

    const handleReserve = () => {
        if (yaExiste) {
            Swal.fire({
                icon: "info",
                title: "Ya reservado",
                text: `Ya hiciste una reserva para ${car.name}.`,
                toast: true,
                position: "top-end",
                timer: 1800,
                showConfirmButton: false,
            });
            return;
        }
        setShowModal(true);
    };

    const handleConfirmModal = (carConFechas) => {
        addBooking(carConFechas);
        setShowModal(false);
        Swal.fire({
            icon: "success",
            title: "¡Reserva confirmada!",
            text: `${car.name} reservado`,
            timer: 2000,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
        });
    };

    return (
        <div className="car-detail-container">
            <div className="car-detail-card">
                <div className="car-img-detalles">
                    <img src={car.image} alt={car.name} className="car-detail-img" />
                </div>
                <div className="car-detail-info">
                    <div className="card-inner text-center">
                        <h1 className="title-carDetail">{car.name}</h1>
                        <p className="text-primary mb-1">
                            {car.type} - {car.year}
                        </p>
                        <div className="container-detalles">
                            <div className="primer-container d-flex justify-around gap-5">
                                <div className="text-description d-flex align-items-center text-center p-2 mb-3">
                                    <BsPeopleFill />
                                    <p className="m-0 ps-1">{car.seats} Asientos</p>
                                </div>
                                <div className="text-description d-flex align-items-center text-center p-2 mb-3">
                                    <BsFuelPump />
                                    <p className="m-0 ps-1">{car.fuel}</p>
                                </div>
                            </div>
                            <div className="segundo-container d-flex justify-around gap-5">
                                <div className="text-description d-flex align-items-center text-center p-2 mb-3">
                                    <FaCar />
                                    <p className="m-0 ps-1">{car.transmission}</p>
                                </div>
                                <div className="text-description d-flex align-items-center text-center p-2 mb-3">
                                    <FaMapMarkerAlt />
                                    <p className="m-0 ps-1">{car.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="description-car text-center">
                        <span className="text-success price-description">${car.price}/DAY</span>
                        <p className="description">{car.description}</p>
                    </div>

                    <div className="btns-detail">
                        <button className="btn btn-outline-success" onClick={handleReserve}>
                            Reservar Ahora
                        </button>
                        <button
                            className="btn btn-outline-primary"
                            onClick={() => navigate("/cars")}
                        >
                            Volver a Ver Autos
                        </button>
                    </div>
                </div>
            </div>

            {showModal && (
                <BookingModal
                    car={car}
                    onClose={() => setShowModal(false)}
                    onConfirm={handleConfirmModal}
                />
            )}
        </div>
    );
};

export default CarDetail;

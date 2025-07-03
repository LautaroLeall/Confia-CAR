// CarDetail.jsx
import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import carsData from "../../api/carsData";
import { BookingContext } from "../../context/BookingContext";
import { BsPeopleFill, BsFuelPump } from "react-icons/bs";
import { FaCar, FaMapMarkerAlt } from "react-icons/fa";
import "./CarDetail.css";

const CarDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addBooking } = useContext(BookingContext);

    const car = carsData.find((c) => c.id === parseInt(id));

    if (!car) return <h2 className="text-center mt-5">Auto no encontrado 🚫</h2>;

    const handleReserve = () => {
        addBooking(car);
        Swal.fire({
            icon: 'success',
            title: '¡Reserva realizada!',
            text: `Reservaste el ${car.name} exitosamente 🚗`,
            showConfirmButton: false,
            timer: 2000,
            toast: true,
            position: 'top-end'
        });
    };

    return (
        <div className="car-detail-container d-flex flex-column align-items-center">
            <div className="car-detail-card align-items-center">
                <div className="car-img-detalles">
                    <img src={car.image} alt={car.name} className="car-detail-img" />
                </div>
                <div className="car-detail-info">
                    <div className="card-inner text-center">
                        <h1>{car.name}</h1>
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

                    <div className="description-car mb-4 text-center">
                        <h3 className="text-success price-description">${car.price}/DAY</h3>
                        <p className="description">{car.description}</p>
                    </div>

                    <div className="btns-detail d-flex justify-content-center gap-5">
                        <button className="btn btn-outline-success" onClick={handleReserve}>
                            Reservar Ahora
                        </button>
                        <button className="btn btn-outline-primary" onClick={() => navigate("/cars")}>
                            Volver a Ver Autos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetail;

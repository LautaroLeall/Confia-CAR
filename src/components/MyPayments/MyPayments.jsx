import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./MyPayments.css";

const MyPayments = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // Obtenemos los pagos por email del usuario logueado
    const pagosPorUsuario = JSON.parse(localStorage.getItem("paidCars")) || {};
    const userEmail = user?.email;
    const paidCars = userEmail ? pagosPorUsuario[userEmail] || [] : [];

    return (
        <div className="container-pagos d-flex flex-column">
            <div className="container-myPayments">
                <h2 className="title-pagos text-center">MIS PAGOS</h2>
                <p className="text-center text-muted fw-bold mb-5">
                    Autos ya pagados {user?.name ? `por ${user.name}` : ""}
                </p>

                {paidCars.length === 0 ? (
                    <div className="text-center mt-5 fst-italic">
                        Aún no pagaste ningún auto. ¡Volvé cuando estés listo para acelerar!
                    </div>
                ) : (
                    <div className="payments-grid d-flex flex-wrap align-items-center justify-content-center gap-5">
                        {paidCars.map((car) => (
                            <div className="payment-card" key={car.id || car.name}>
                                <img src={car.image} alt={car.name} className="payment-img" />
                                <div className="payment-info text-center">
                                    <h5>{car.name}</h5>
                                    <p className="text-primary mb-1">
                                        {car.type} - {car.year}
                                    </p>
                                    {car.pickUpDate && car.dropOffDate && (
                                        <div className="p-2 text-muted text-start">
                                            <p className="m-0"><strong>{car.location}</strong></p>
                                            <p className="m-0"><strong>Retiro:</strong> {car.pickUpDate}</p>
                                            <p className="m-0"><strong>Entrega:</strong> {car.dropOffDate}</p>
                                        </div>
                                    )}
                                    <button
                                        className="btn btn-outline-primary mt-3"
                                        onClick={() => navigate(`/car/${car.id}`)}
                                    >
                                        Ver auto
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

export default MyPayments;

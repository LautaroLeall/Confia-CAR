// src/components/PaymentModal/PaymentModal.jsx
import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { FaCreditCard, FaCalendarAlt, FaLock } from "react-icons/fa";
import "./PaymentModal.css";

const PaymentModal = ({ show, onClose, onConfirmPayment, car }) => {
    const { user } = useContext(AuthContext);

    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const formatCardNumber = (value) => {
        return value.replace(/\D/g, "").substring(0, 16).replace(/(.{4})/g, "$1 ").trim();
    };

    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Solo números
        if (value.length > 4) value = value.slice(0, 4);
        if (value.length >= 3) {
            value = value.slice(0, 2) + "/" + value.slice(2);
        }
        setExpiry(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const number = cardNumber.replace(/\s/g, "");

        if (number.length !== 16) {
            return Swal.fire("Número inválido", "La tarjeta debe tener 16 dígitos.", "error");
        }

        if (!expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
            return Swal.fire("Fecha inválida", "Formato incorrecto. Usá MM/AA.", "warning");
        }

        if (cvv.length !== 3) {
            return Swal.fire("CVV inválido", "Debe tener 3 dígitos.", "error");
        }

        Swal.fire({
            title: "Procesando...",
            text: "Confirmando pago",
            icon: "info",
            allowOutsideClick: false,
            timer: 1800,
            showConfirmButton: false,
            didOpen: () => {
                Swal.showLoading();
            },
        }).then(() => {
            onConfirmPayment(car);
            onClose();
            setCardNumber("");
            setExpiry("");
            setCvv("");

            Swal.fire({
                title: "¡Pago exitoso!",
                text: `Has pagado el alquiler de ${car.name}`,
                icon: "success",
                timer: 2500,
                showConfirmButton: false,
                toast: true,
                position: "top-end",
            });
        });
    };

    if (!show) return null;

    return (
        <div className="modal-overlay">
            <form onSubmit={handleSubmit} className="payment-modal animate__animated animate__zoomIn">
                <h3 className="title-modal text-center mb-3">
                    CONFIRMAR PAGO
                </h3>

                <p className="text-light mb-4 text-center">
                    <strong className="text-primary">{user?.name}</strong>, estás a punto de pagar el alquiler del <strong>{car?.name}</strong>
                </p>

                <label className="form-label d-flex align-items-center">
                    <FaCreditCard className="icon-form me-2" />
                    Número de Tarjeta
                </label>
                <input
                    type="text"
                    className="form-control mb-3 text-center"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required
                />

                <div className="d-flex gap-3 mb-4">
                    <div className="w-100">
                        <label className="form-label d-flex align-items-center">
                            <FaCalendarAlt className="icon-form me-2" />
                            Expiración
                        </label>
                        <input
                            type="text"
                            className="form-control text-center"
                            placeholder="MM/AA"
                            value={expiry}
                            onChange={handleExpiryChange}
                            required
                        />
                    </div>
                    <div className="w-100">
                        <label className="form-label d-flex align-items-center">
                            <FaLock className="icon-form me-2" />
                            CVV
                        </label>
                        <input
                            type="text"
                            className="form-control text-center"
                            placeholder="123"
                            value={cvv}
                            onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").substring(0, 3))}
                            required
                        />
                    </div>
                </div>

                <div className="d-flex justify-content-center gap-4">
                    <button type="button" className="btn btn-outline-secondary btn-modal" onClick={onClose}>
                        Cancelar
                    </button>
                    <button type="submit" className="btn btn-outline-success btn-modal">
                        Confirmar Pago
                    </button>
                </div>
            </form>
        </div>
    );
};

export default PaymentModal;

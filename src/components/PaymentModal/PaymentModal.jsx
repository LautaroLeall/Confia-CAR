// src/components/PaymentModal/PaymentModal.jsx
import React, { useContext, useState } from "react";
import { Modal, Button, Form, Row, Col } from "react-bootstrap";
import { AuthContext } from "../../context/AuthContext";
import "./PaymentModal.css";

const PaymentModal = ({ show, onClose, onConfirmPayment, car }) => {
    const { user } = useContext(AuthContext);

    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    // Formatea número de tarjeta: 1234 5678 9012 3456
    const handleCardNumberChange = (e) => {
        let value = e.target.value.replace(/\D/g, ""); // Quitar no números
        value = value.substring(0, 16); // máximo 16 dígitos

        // Formatear con espacios cada 4 dígitos
        let formatted = "";
        for (let i = 0; i < value.length; i++) {
            if (i !== 0 && i % 4 === 0) formatted += " ";
            formatted += value[i];
        }
        setCardNumber(formatted);
    };

    // Formatea expiry: MM/AA
    const handleExpiryChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 4) value = value.substring(0, 4);

        if (value.length >= 3) {
            value = value.substring(0, 2) + "/" + value.substring(2);
        }
        setExpiry(value);
    };

    // Solo números y max 3 para CVV
    const handleCvvChange = (e) => {
        let value = e.target.value.replace(/\D/g, "");
        if (value.length > 3) value = value.substring(0, 3);
        setCvv(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones básicas
        if (cardNumber.replace(/\s/g, "").length !== 16) {
            alert("El número de tarjeta debe tener 16 dígitos.");
            return;
        }
        if (!expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/)) {
            alert("Fecha de expiración inválida. Usa formato MM/AA.");
            return;
        }
        if (cvv.length !== 3) {
            alert("CVV debe tener 3 dígitos.");
            return;
        }

        onConfirmPayment(car);
        onClose();

        // Limpio los campos
        setCardNumber("");
        setExpiry("");
        setCvv("");
    };

    return (
        <Modal show={show} onHide={onClose} centered>
            <Modal.Header className="align-items-center justify-content-center" closeButton>
                <Modal.Title className="title-modal-payment text-center m-0 p-0 w-100">
                    CONFIRMAR PAGO
                </Modal.Title>
            </Modal.Header>

            <Form onSubmit={handleSubmit}>
                <Modal.Body>
                    <p>
                        <strong className="text-primary">
                            {user?.name}
                        </strong>
                        , estás a punto de pagar el alquiler del vehículo:
                    </p>
                    <h5 className="text-primary text-center mb-4">{car?.name}</h5>

                    <Form.Group className="mb-3">
                        <Form.Label>Número de tarjeta</Form.Label>
                        <Form.Control
                            type="tel"
                            placeholder="1234 5678 9012 3456"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            maxLength={19}
                            required
                            autoComplete="cc-number"
                        />
                    </Form.Group>

                    <Row className="mb-3">
                        <Col xs={6}>
                            <Form.Label>Fecha de expiración</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="MM/AA"
                                value={expiry}
                                onChange={handleExpiryChange}
                                maxLength={5}
                                required
                                autoComplete="cc-exp"
                            />
                        </Col>
                        <Col xs={6}>
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                                type="tel"
                                placeholder="123"
                                value={cvv}
                                onChange={handleCvvChange}
                                maxLength={3}
                                required
                                autoComplete="cc-csc"
                            />
                        </Col>
                    </Row>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={onClose}>
                        Cancelar
                    </Button>
                    <Button variant="success" type="submit">
                        Confirmar Pago
                    </Button>
                </Modal.Footer>
            </Form>
        </Modal>
    );
};

export default PaymentModal;

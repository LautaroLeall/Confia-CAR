// src/components/Auth/Login.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import loginImage from '/public/login_car.png';
import "./Login.css";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const { login } = useContext(AuthContext); // login del contexto

    const handleLogin = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const matchedUser = storedUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (matchedUser) {
            login(matchedUser); // guardamos el usuario en context
            Swal.fire({
                icon: "success",
                title: "Inicio de sesión exitoso",
                text: `¡Bienvenido, ${matchedUser.name}!`,
                showConfirmButton: false,
                timer: 1500,
                toast: true,
                position: "top-end",
            });
            navigate("/");
        } else {
            Swal.fire({
                icon: "error",
                title: "Error de inicio de sesión",
                text: "Usuario o contraseña incorrectos",
            });
        }
    };

    return (
        <div className="login-container">
            <form className="login-form d-flex flex-column" onSubmit={handleLogin}>
                <h2>INICIAR SESIÓN</h2>
                <input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Ingresar</button>
            </form>
            <div className="image-login">
                <img src={loginImage} alt="Cars" className="register-img" />
            </div>
        </div>
    );
};

export default Login;

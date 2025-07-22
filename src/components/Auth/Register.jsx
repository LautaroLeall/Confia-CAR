// src/components/Auth/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import registerImage from '/public/auth/register_car.png';
import "./Register.css";
import Swal from "sweetalert2";

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

        const userExists = storedUsers.some((u) => u.email === email);
        if (userExists) {
            return Swal.fire({
                icon: "error",
                title: "Este correo ya está registrado",
                text: "Probá iniciar sesión o usá otro email.",
            });
        }

        const newUser = { name, email, password };
        const updatedUsers = [...storedUsers, newUser];
        localStorage.setItem("users", JSON.stringify(updatedUsers));

        Swal.fire({
            icon: "success",
            title: "Registro exitoso",
            text: "Ya podés iniciar sesión.",
            showConfirmButton: false,
            timer: 1500,
            toast: true,
            position: "top-end",
        });

        navigate("/login");
    };

    return (
        <div className="register-container">
            <form className="register-form" onSubmit={handleRegister}>
                <h2>REGISTRARSE</h2>
                <input
                    type="text"
                    placeholder="Nombre de usuario"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
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
                <button type="submit">Crear cuenta</button>
            </form>
            <div className="image-register">
                <img src={registerImage} alt="Cars" className="register-img" />
            </div>
        </div>
    );
};

export default Register;

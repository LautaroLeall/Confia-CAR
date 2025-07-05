// src/routes/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import NotFound from "../components/NotFound/NotFound";
import Home from "../components/Home/Home";
import Carousel from "../components/Cars/Carousel";
import CarDetail from "../components/CarDetail/CarDetail";
import MyBookings from "../components/MyBooks/MyBookings";
import MyPayments from "../components/MyPayments/MyPayments";
import Contact from "../components/Contact/Contact";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = ({ cars }) => (
    <Routes>
        <Route path="/" />
        <Route path="*" element={<NotFound />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cars" element={<Carousel cars={cars} />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/myBookings" element={<MyBookings />} />

        <Route path="/myPayments" element={
            <PrivateRoute>
                <MyPayments />
            </PrivateRoute>
        } />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
);

export default AppRoutes;

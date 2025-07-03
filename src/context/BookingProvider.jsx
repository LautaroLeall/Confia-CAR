// BookingProvider.jsx
import React, { useState, useEffect } from "react";
import { BookingContext } from "./BookingContext";

const BookingProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("bookings");
        if (stored) {
            setBookings(JSON.parse(stored));
        }
    }, []);

    const addBooking = (car) => {
        const updatedBookings = [...bookings, car];
        setBookings(updatedBookings);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    };

    const removeBooking = (id) => {
        const updatedBookings = bookings.filter((b) => b.id !== id);
        setBookings(updatedBookings);
        localStorage.setItem("bookings", JSON.stringify(updatedBookings));
    };

    return (
        <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export default BookingProvider;

import React, { useState, useEffect } from "react";
import { BookingContext } from "./BookingContext";

// guardar las fechas también en el Context
const BookingProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        const stored = localStorage.getItem("bookings");
        if (stored) {
            setBookings(JSON.parse(stored));
        }
    }, []);

    const addBooking = (carConFechas) => {
        const updated = [...bookings, carConFechas];
        setBookings(updated);
        localStorage.setItem("bookings", JSON.stringify(updated));
    };

    const removeBooking = (id) => {
        const updated = bookings.filter((b) => b.id !== id);
        setBookings(updated);
        localStorage.setItem("bookings", JSON.stringify(updated));
    };

    return (
        <BookingContext.Provider value={{ bookings, addBooking, removeBooking }}>
            {children}
        </BookingContext.Provider>
    );
};

export default BookingProvider;

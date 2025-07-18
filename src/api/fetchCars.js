// // src/api/fetchCars.js
// import { API_URL } from "./config";

// const fetchCars = async () => {
//     try {
//         const response = await fetch(`${API_URL}/cars`);
//         if (!response.ok) throw new Error("Error al obtener los autos");
//         return await response.json();
//     } catch (error) {
//         console.error("Error al cargar los autos:", error);
//         return [];
//     }
// };

// export default fetchCars;

import carsData from './carsData';

// simula una API.
const fetchCars = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(carsData);
        }, 500); // Simula una latencia de red
    });
};

export default fetchCars;

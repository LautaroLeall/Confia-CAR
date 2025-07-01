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

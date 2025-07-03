import bmwImage from '../assets/cars/bmw-x5.png';
import corollaImage from '../assets/cars/corolla.png';
import jeepImage from '../assets/cars/jeep-wrangler.png';
import fordImage from '../assets/cars/ford-ranger.png';
import camaroImage from '../assets/cars/camaro.png';
import teslaImage from '../assets/cars/tesla-models.png';
import audiImage from '../assets/cars/audi-q5.png';

// Simular Api data
const carsData = [
    {
        id: 1,
        name: "BMW X5",
        type: "SUV",
        year: 2006,
        seats: 4,
        fuel: "Hybrid",
        transmission: "Semi-Automatic",
        location: "New York",
        price: 300,
        image: bmwImage,
        description: "El BMW X5 combina lujo, potencia y confort. Ideal para quienes buscan una experiencia de manejo robusta con toques premium.",
    },
    {
        id: 2,
        name: "Toyota Corolla",
        type: "Sedan",
        year: 2021,
        seats: 4,
        fuel: "Diesel",
        transmission: "Automatic",
        location: "Los Angeles",
        price: 130,
        image: corollaImage,
        description: "El Toyota Corolla es un sedán compacto, económico y confiable. Perfecto para recorridos urbanos o viajes largos sin preocuparse por el consumo.",
    },
    {
        id: 3,
        name: "Jeep Wrangler",
        type: "SUV",
        year: 2023,
        seats: 4,
        fuel: "Hybrid",
        transmission: "Automatic",
        location: "Los Angeles",
        price: 200,
        image: jeepImage,
        description: "El Jeep Wrangler es la mejor opción para aventuras off-road. Su diseño resistente y tracción te llevan a cualquier lugar con estilo.",
    },
    {
        id: 4,
        name: "Ford Ranger",
        type: "SUV",
        year: 2022,
        seats: 5,
        fuel: "Diesel",
        transmission: "Semi-Automatic",
        location: "Houston",
        price: 220,
        image: fordImage,
        description: "La Ford Ranger ofrece fuerza, espacio y tecnología. Ideal para viajes familiares o trabajo pesado sin renunciar al confort.",
    },
    {
        id: 5,
        name: "Chevrolet Camaro",
        type: "Coupe",
        year: 2022,
        seats: 2,
        fuel: "Gasoline",
        transmission: "Manual",
        location: "Miami",
        price: 250,
        image: camaroImage,
        description: "El Chevrolet Camaro es pura adrenalina. Un deportivo potente con diseño agresivo y respuesta precisa para los amantes de la velocidad.",
    },
    {
        id: 6,
        name: "Tesla Model S",
        type: "Sedan",
        year: 2024,
        seats: 5,
        fuel: "Electric",
        transmission: "Automatic",
        location: "San Francisco",
        price: 280,
        image: teslaImage,
        description: "El Tesla Model S redefine la conducción eléctrica. Silencioso, elegante y cargado de tecnología, ideal para un manejo moderno y ecológico.",
    },
    {
        id: 7,
        name: "Audi Q5",
        type: "SUV",
        year: 2023,
        seats: 5,
        fuel: "Hybrid",
        transmission: "Automatic",
        location: "Chicago",
        price: 270,
        image: audiImage,
        description: "El Audi Q5 destaca por su confort y diseño sofisticado. Una SUV equilibrada con gran performance y acabados premium.",
    }
];

export default carsData;

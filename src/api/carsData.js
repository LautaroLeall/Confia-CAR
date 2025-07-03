import bmwImage from '/public/cars/bmw-x5.png';
import corollaImage from '/public/cars/corolla.png';
import jeepImage from '/public/cars/jeep-wrangler.png';
import fordImage from '/public/cars/ford-ranger.png';
import camaroImage from '/public/cars/camaro.png';
import teslaImage from '/public/cars/tesla-models.png';
import audiImage from '/public/cars/audi-q5.png';

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
        description: "El BMW X5 combina lujo, potencia y confort. Ideal para quienes buscan una experiencia de manejo robusta con toques premium.",
        image: bmwImage,
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
        description: "El Toyota Corolla es un sedán compacto, económico y confiable. Perfecto para recorridos urbanos o viajes largos sin preocuparse por el consumo.",
        image: corollaImage,
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
        description: "El Jeep Wrangler es la mejor opción para aventuras off-road. Su diseño resistente y tracción te llevan a cualquier lugar con estilo.",
        image: jeepImage,
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
        description: "La Ford Ranger ofrece fuerza, espacio y tecnología. Ideal para viajes familiares o trabajo pesado sin renunciar al confort.",
        image: fordImage,
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
        description: "El Chevrolet Camaro es pura adrenalina. Un deportivo potente con diseño agresivo y respuesta precisa para los amantes de la velocidad.",
        image: camaroImage,
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
        description: "El Tesla Model S redefine la conducción eléctrica. Silencioso, elegante y cargado de tecnología, ideal para un manejo moderno y ecológico.",
        image: teslaImage,
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
        description: "El Audi Q5 destaca por su confort y diseño sofisticado. Una SUV equilibrada con gran performance y acabados premium.",
        image: audiImage,
    }
];

export default carsData;

import bmwImage from '/public/bmw-x5.png';
import corollaImage from '/public/corolla.png';
import jeepImage from '/public/jeep-wrangler.png';
import fordImage from '/public/ford-ranger.png';
import camaroImage from '/public/camaro.png';
import teslaImage from '/public/tesla-models.png';
import audiImage from '/public/audi-q5.png';

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
        image: bmwImage
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
        image: corollaImage
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
        image: jeepImage
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
        image: fordImage
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
        image: camaroImage
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
        image: teslaImage
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
        image: audiImage
    }
];

export default carsData;

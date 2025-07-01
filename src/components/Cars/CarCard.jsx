import carsData from '../../api/carsData'; // o donde tengas tus autos
import './Cards.css';

const Cards = () => {
  return (
    <div className="card-3d">
      {carsData.slice(0, 10).map((car, i) => (
        <div className="card-face" key={i}>
          <img src={car.image} alt={car.name} />
          <h4>{car.name}</h4>
          <p>${car.price} / day</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;

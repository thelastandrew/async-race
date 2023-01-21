import { CarType } from '../../interfaces/interfaces';

type PropsType = {
  cars: CarType[],
  totalCars: number,
}

const Garage = ({ cars, totalCars }: PropsType) => {

  return (
    <div>
      <h3>Cars ({totalCars})</h3>
      { cars.map(car => <div key={car.id} style={{color: car.color}}>{car.name}</div>) }
    </div>
  );
};

export default Garage;
import { CarType } from '../../interfaces/interfaces';
import Car from '../Car/Car';


const CarsList = ({ cars }: { cars: CarType[] }) => {
  return (
    <div>
      {cars.map(car => <Car key={car.id} car={car} />)}
    </div>
  );
};

export default CarsList;
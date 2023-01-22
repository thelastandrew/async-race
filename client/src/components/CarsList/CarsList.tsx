import { CarType } from '../../interfaces/interfaces';
import Car from '../Car/Car';


const CarsList = ({ cars }: { cars: CarType[] }) => {
  return (
    <div className='garage__cars-list'>
      {cars.map(car => <Car key={car.id} car={car} />)}
    </div>
  );
};

export default CarsList;
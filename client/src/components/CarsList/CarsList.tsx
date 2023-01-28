import { CarType } from '../../interfaces/interfaces';
import CarContainer from '../Car/CarContainer';


const CarsList = ({ cars }: { cars: CarType[] }) => {
  return (
    <div>
      {cars.map(car => <CarContainer key={car.id} car={car} />)}
    </div>
  );
};

export default CarsList;
import Car from './Car';
import { CarType } from '../../interfaces/interfaces';

const CarContainer = ({ car }: { car: CarType }) => {
  return (
    <Car
      car={car}
    />
  );
};

export default CarContainer;
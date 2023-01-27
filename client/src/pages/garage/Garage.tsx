import { CarType } from '../../interfaces/interfaces';
import GarageControls from '../../components/GarageControls/GarageControls';
import CarsList from '../../components/CarsList/CarsList';
import './Garage.css';

type PropsType = {
  cars: CarType[],
  totalCars: number,
  page: number,
}

const Garage = ({ cars, totalCars, page }: PropsType) => {

  return (
    <div className='garage'>
      <GarageControls />
      <h1 className='garage__title'>Garage ({totalCars})</h1>
      <h4 className='garage__page'>Page #{page}</h4>
      <CarsList cars={cars}/>
    </div>
  );
};

export default Garage;
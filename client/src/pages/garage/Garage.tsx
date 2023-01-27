import { CarType } from '../../interfaces/interfaces';
import GarageControls from '../../components/GarageControls/GarageControls';
import CarsList from '../../components/CarsList/CarsList';
import s from './Garage.module.css';

type PropsType = {
  cars: CarType[],
  totalCars: number,
  page: number,
}

const Garage = ({ cars, totalCars, page }: PropsType) => {

  return (
    <div className={s.garage}>
      <GarageControls />
      <h1 className={s.garageTitle}>Garage ({totalCars})</h1>
      <h4 className={s.garagePage}>Page #{page}</h4>
      <CarsList cars={cars}/>
    </div>
  );
};

export default Garage;
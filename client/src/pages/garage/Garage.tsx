import { CarType } from '../../interfaces/interfaces';
import GarageControls from '../../components/GarageControls/GarageControls';
import CarsList from '../../components/CarsList/CarsList';
import s from './Garage.module.css';
import PaginationContainer from '../../components/Pagination/PaginationContainer';

type PropsType = {
  cars: CarType[],
  totalCars: number,
  page: number,
  isFetchingCars: boolean,
}

const Garage = ({ cars, totalCars, page, isFetchingCars }: PropsType) => {

  return (
    <div className={s.garage}>
      <GarageControls />
      <h1 className={s.garageTitle}>Garage ({totalCars})</h1>
      <h4 className={s.garagePage}>Page #{page}</h4>
      {isFetchingCars
        ? <p>Loading ...</p>
        : <CarsList cars={cars} />
      }
      <PaginationContainer />
    </div>
  );
};

export default Garage;
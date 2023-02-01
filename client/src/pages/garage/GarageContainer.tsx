import { useEffect, useContext } from 'react'
import AppContext from '../../context/AppContext';
import Garage from './Garage';

const GarageContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cars, page, totalCars, limit, isFetchingCars, getCars, checkPgAvl } = state.garage;


  useEffect(() => {
    getCars(page)(dispatch);
    checkPgAvl(page, totalCars, limit)(dispatch);
  }, [page]);

  return <Garage
    cars={cars}
    totalCars={totalCars}
    page={page}
    isFetchingCars={isFetchingCars}
  />;
};

export default GarageContainer;
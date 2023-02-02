import { useEffect, useContext } from 'react'
import AppContext from '../../context/AppContext';
import Garage from './Garage';

const GarageContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cars, page, totalCars, isFetchingCars, getCars, checkPgAvl } = state.garage;


  useEffect(() => {
    getCars(page)(dispatch);
    checkPgAvl(page, totalCars)(dispatch);
  }, [page, totalCars]);

  return <Garage
    cars={cars}
    totalCars={totalCars}
    page={page}
    isFetchingCars={isFetchingCars}
  />;
};

export default GarageContainer;
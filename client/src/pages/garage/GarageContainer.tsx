import { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext';
import { garageAPI } from '../../api/api';
import { CarType } from '../../interfaces/interfaces';
import Garage from './Garage';
import { ACTION_TYPES } from '../../context/actions';

type ResponseType = {
  data: CarType[],
  count: number,
};

const GarageContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cars, totalCars, page, limit } = state.garage;

  const setCars = (cars: CarType[]) => dispatch({ type: ACTION_TYPES.SET_CARS, payload: cars });
  const setTotal = (totalCars: number) => dispatch({ type: ACTION_TYPES.SET_TOTAL, payload: totalCars });

  useEffect(() => {
    garageAPI.getCarsByPage(page, limit)
      .then(response => {
        setCars((response as ResponseType).data);
        setTotal((response as ResponseType).count);
      });
  }, [page, limit]);

  return <Garage
    cars={cars}
    totalCars={totalCars}
    page={page}
  />;
};

export default GarageContainer;
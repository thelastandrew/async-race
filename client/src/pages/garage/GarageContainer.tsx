import { useContext, useEffect } from 'react'
import AppContext from '../../context/AppContext';
import { garageAPI } from '../../api/api';
import { CarType } from '../../interfaces/interfaces';
import Garage from './Garage';

type ResponseType = {
  data: CarType[],
  count: number,
};

const GarageContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cars, totalCars, page, limit, setCars, setTotal } = state.garage;

  useEffect(() => {
    garageAPI.getCarsByPage(page, limit)
      .then(response => {
        dispatch(setCars((response as ResponseType).data));
        dispatch(setTotal((response as ResponseType).count));
      });
  }, [page, limit]);

  return <Garage
    cars={cars}
    totalCars={totalCars}
    page={page}
  />;
};

export default GarageContainer;
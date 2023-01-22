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
  const { cars, totalCars, page, limit, setCars, setTotal } = useContext(AppContext);

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
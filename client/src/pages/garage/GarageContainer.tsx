import { useState, useEffect } from 'react'
import { garageAPI } from '../../api/api';
import { CarType } from '../../interfaces/interfaces';
import Garage from './Garage';

const GarageContainer = () => {
  const [cars, setCars] = useState([] as CarType[])
  const [totalCars, setTotalCars] = useState(0);

  useEffect(() => {
    garageAPI.getCarsByPage(1)
      .then(response => {
        setCars(response.data);
        setTotalCars(response.count);
      });
  }, []);

  return <Garage
    cars={cars}
    totalCars={totalCars}
    page={1}
  />;
};

export default GarageContainer;
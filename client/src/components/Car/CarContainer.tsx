import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { garageAPI } from '../../api/api';
import Car from './Car';
import { CarType } from '../../interfaces/interfaces';

const CarContainer = ({ car }: { car: CarType }) => {
  const { state, dispatch } = useContext(AppContext);
  const { cars, page, getCars, setGaragePage } = state.garage;

  const deleteCar = (id: number) => {
    garageAPI.deleteCar(id)
      .then(() => {
        if (cars.length === 1 && page > 1) {
          setGaragePage(page-1)(dispatch);
        } else {
          getCars(page)(dispatch);
        }
      });
  }
  return (
    <Car
      car={car}
      deleteCar={deleteCar}
    />
  );
};

export default CarContainer;
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Car from './Car';
import { CarType } from '../../interfaces/interfaces';
import { garageAPI } from '../../api/api';

const CarContainer = ({ car }: { car: CarType }) => {
  const { state, dispatch } = useContext(AppContext);
  const { setCarToUpdId, setCarToUpdName, setCarToUpdColor, toggleIsUpdating } = state.carToUpd;
  const { page, setCars, setTotal } = state.garage;

  const setCarToUpd = () => {
    dispatch(toggleIsUpdating(true));
    dispatch(setCarToUpdId(car.id));
    dispatch(setCarToUpdName(car.name));
    dispatch(setCarToUpdColor(car.color));
  };

  const removeCar = async () => {
    await garageAPI.deleteCar(car.id)
    const { data, count } = await garageAPI.getCarsByPage(page);
    dispatch(setCars(data));
    dispatch(setTotal(count));
  };

  return (
    <Car
      car={car}
      setCarToUpd={setCarToUpd}
      removeCar={removeCar}
    />
  );
};

export default CarContainer;
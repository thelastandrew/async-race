import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Car from './Car';
import { CarType } from '../../interfaces/interfaces';

const CarContainer = ({ car }: { car: CarType }) => {
  const { state, dispatch } = useContext(AppContext);
  const { setCarToUpdId, setCarToUpdName, setCarToUpdColor, toggleIsUpdating } = state.carToUpd;

  const setCarToUpd = () => {
    dispatch(toggleIsUpdating(true));
    dispatch(setCarToUpdId(car.id));
    dispatch(setCarToUpdName(car.name));
    dispatch(setCarToUpdColor(car.color));
  };

  return (
    <Car
      car={car}
      setCarToUpd={setCarToUpd}
    />
  );
};

export default CarContainer;
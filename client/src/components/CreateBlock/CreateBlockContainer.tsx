import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import CreateBlock from './CreateBlock';

const CreateBlockContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { cars, totalCars, addCar } = state.garage;

  const createCar = (name: string, color: string) => {
    addCar(name, color, cars, totalCars)(dispatch);
  };

  return <CreateBlock
    cars={cars}
    totalCars={totalCars}
    createCar={createCar}
  />;
};

export default CreateBlockContainer;
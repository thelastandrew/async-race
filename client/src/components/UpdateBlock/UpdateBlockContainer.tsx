import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { garageAPI } from '../../api/api';
import UpdateBlock from './UpdateBlock';

const UpdateBlockContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { id, name, color, isUpdating, setCarToUpdId, setCarToUpdName, setCarToUpdColor, toggleIsUpdating } = state.carToUpd;
  const { updateCars } = state.garage;

  const updateCar = () => {
    garageAPI.updateCar(id, name, color)
      .then(car => { dispatch(updateCars(car)) });
    dispatch(toggleIsUpdating(false));
    dispatch(setCarToUpdId(0));
    dispatch(setCarToUpdName(''));
    dispatch(setCarToUpdColor('#000000'));
  }

  return (
    <UpdateBlock
      name={name}
      color={color}
      isUpdating={isUpdating}
      updateName={setCarToUpdName}
      updateColor={setCarToUpdColor}
      dispatch={dispatch}
      updateCar={updateCar}
    />
  );
};

export default UpdateBlockContainer;
import { useContext } from 'react';
import { garageAPI } from '../../api/api';
import AppContext from '../../context/AppContext';
import CreateBlock from './CreateBlock';
import { generateColor, getTotalPages } from '../../utils/utils';

const CreateBlockContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { name, color, updateName, updateColor } = state.newCar;
  const { cars, totalCars, limit, page, addCar, setTotal } = state.garage;

  const addNewCar = () => {
    garageAPI.createNewCar(name, color)
      .then(data => {
        dispatch(setTotal(totalCars + 1));
        const totalPages = getTotalPages(totalCars, limit);
        if (page === totalPages && cars.length < limit) {
          dispatch(addCar(data));
        }
        dispatch(updateName(''));
        dispatch(updateColor(generateColor()));
      })
  }

  return <CreateBlock
    name={name}
    color={color}
    updateName={updateName}
    updateColor={updateColor}
    addNewCar={addNewCar}
    dispatch={dispatch}
  />;
};

export default CreateBlockContainer;
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import UpdateBlock from './UpdateBlock';

const UpdateBlockContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { isUpdating, id, name, color, updateName, updateColor, setIsUpdating } = state.carToUpd;
  const { updateCar } = state.garage;

  const handleUpdateName = (name: string) => {
    updateName(name)(dispatch);
  };

  const handleUpdateColor = (color: string) => {
    updateColor(color)(dispatch);
  };

  const handleUpdateCar = () => {
    updateCar(id, name, color)(dispatch);
    setIsUpdating(false)(dispatch);
    updateName('')(dispatch);
    updateColor('#000000')(dispatch);
  };

  return (
    <UpdateBlock
      isUpdating={isUpdating}
      id={id}
      name={name}
      color={color}
      handleUpdateName={handleUpdateName}
      handleUpdateColor={handleUpdateColor}
      handleUpdateCar={handleUpdateCar}
    />
  );
};

export default UpdateBlockContainer;
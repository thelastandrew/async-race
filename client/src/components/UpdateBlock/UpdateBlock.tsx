import { ChangeEvent } from 'react';
import Button from '../../UI/Button/Button';
import s from './UpdateBlock.module.css';

type PropsType = {
  isUpdating: boolean;
  id: number;
  name: string;
  color: string;
  handleUpdateName: (name: string) => void;
  handleUpdateColor: (color: string) => void;
  handleUpdateCar: () => void;
};

const UpdateBlock = ({ isUpdating, id, name, color, handleUpdateName, handleUpdateColor, handleUpdateCar }: PropsType) => {
  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    handleUpdateName(e.target.value);
  };

  const handleChangeColor = (e: ChangeEvent<HTMLInputElement>) => {
    handleUpdateColor(e.target.value);
  };

  return (
    <div className={s.updateBlock}>
      <input
        disabled={!isUpdating}
        type='text'
        value={name}
        onChange={handleChangeName}
      />
      <input
        disabled={!isUpdating}
        type='color'
        value={color}
        onChange={handleChangeColor}
      />
      <Button handleClick={handleUpdateCar} disabled={!isUpdating}>Update</Button>
    </div>
  );
};

export default UpdateBlock;
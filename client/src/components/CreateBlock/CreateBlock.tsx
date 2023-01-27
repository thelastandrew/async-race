import React from 'react';
import Button from '../../UI/Button/Button';
import s from './CreateBlock.module.css';

type PropsType = {
  name: string,
  color: string,
  updateName: (name: string) => void,
  updateColor: (color: string) => void,
  addNewCar: () => void,
  dispatch: React.Dispatch<any>
};

const CreateBlock = ({ name, color, updateName, updateColor, addNewCar, dispatch }: PropsType) => {
  const handleCreate = () => {
    addNewCar();
  }

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateName(e.target.value));
  };
  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateColor(e.target.value));
  };

  return (
    <div className={s.createBlock}>
      <input type='text' value={name} onChange={handleChangeName} />
      <input type='color' value={color} onChange={handleChangeColor} />
      <Button handleClick={handleCreate}>Create</Button>
    </div>
  );
};

export default CreateBlock;
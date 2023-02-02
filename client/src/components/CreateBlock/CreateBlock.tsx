import { useState, ChangeEvent } from 'react';
import { generateColor } from '../../utils/utils';
import Button from '../../UI/Button/Button';
import s from './CreateBlock.module.css';
import { CarType } from '../../interfaces/interfaces';

type PropsType = {
  cars: CarType[];
  totalCars: number;
  createCar: (name: string, color: string) => void;
}

const CreateBlock = ({ cars, totalCars, createCar }: PropsType) => {
  const [name, setName] = useState('');
  const [color, setColor] = useState(generateColor());

  const handleCreate = () => {
    createCar(name, color);
    setName('');
    setColor(generateColor());
  };

  return (
    <div className={s.createBlock}>
      <input
        type='text'
        value={name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {setName(e.target.value)}}
      />
      <input
        type='color'
        value={color}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {setColor(e.target.value)}}
      />
      <Button handleClick={handleCreate}>Create</Button>
    </div>
  );
};

export default CreateBlock;
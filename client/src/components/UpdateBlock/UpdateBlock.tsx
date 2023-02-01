import Button from '../../UI/Button/Button';
import s from './UpdateBlock.module.css';

const UpdateBlock = () => {
  const updateCar = () => console.log('updating car...');

  return (
    <div className={s.updateBlock}>
      <input
        type='text'
      />
      <input
        type='color'
      />
      <Button handleClick={updateCar}>Update</Button>
    </div>
  );
};

export default UpdateBlock;
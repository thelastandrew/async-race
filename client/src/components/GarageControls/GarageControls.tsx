import Button from '../../UI/Button/Button';
import CreateBlockContainer from '../CreateBlock/CreateBlockContainer';
import s from './GarageControls.module.css';

const GarageControls = () => {
  const handleUpdate = () => {
    console.log('updating car...');
  };

  return (
    <div className={s.garageControls}>
      <CreateBlockContainer />
      <div className={s.updateBlock}>
        <input type='text'
        />
        <input type='color' />
        <Button handleClick={handleUpdate}>Update</Button>
      </div>
      <div className={s.actionsBlock}>
        <Button handleClick={() => {}}>Race</Button>
        <Button handleClick={() => {}}>Reset</Button>
        <Button handleClick={() => {}}>Generate cars</Button>
      </div>
    </div>
  );
};

export default GarageControls;

import Button from '../../UI/Button/Button';
import s from './GarageControls.module.css';

const GarageControls = () => {

  const handleCreate = () => {
    console.log('creating car...');
  };
  const handleUpdate = () => {
    console.log('updating car...');
  };

  return (
    <div className={s.garageControls}>
      <div className={s.createBlock}>
        <input
          type='text'
        />
        <input
          type='color'
        />
        <Button handleClick={handleCreate}>Create</Button>
      </div>
      <div className={s.updateBlock}>
        <input type='text'
        />
        <input type='color' />
        <Button handleClick={handleUpdate}>Update</Button>
      </div>
      <div className={s.actionsBlock}>
        <Button>Race</Button>
        <Button>Reset</Button>
        <Button>Generate cars</Button>
      </div>
    </div>
  );
};

export default GarageControls;

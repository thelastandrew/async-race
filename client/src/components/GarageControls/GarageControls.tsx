import Button from '../../UI/Button/Button';
import CreateBlockContainer from '../CreateBlock/CreateBlockContainer';
import UpdateBlockContainer from '../UpdateBlock/UpdateBlockContainer';
import s from './GarageControls.module.css';

const GarageControls = () => {
  return (
    <div className={s.garageControls}>
      <CreateBlockContainer />
      <UpdateBlockContainer />
      <div className={s.actionsBlock}>
        <Button handleClick={() => {}}>Race</Button>
        <Button handleClick={() => {}}>Reset</Button>
        <Button handleClick={() => {}}>Generate cars</Button>
      </div>
    </div>
  );
};

export default GarageControls;

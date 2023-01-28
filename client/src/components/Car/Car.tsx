import { CarType } from '../../interfaces/interfaces';
import CarImg from './CarImg';
import Button from '../../UI/Button/Button';
import flag from './flag.png'
import s from './Car.module.css';

type CarProps = {
  car: CarType,
  setCarToUpd: () => void,
}

const Car = ({ car, setCarToUpd }: CarProps) => {
  const handleRemove = () => console.log('remove ', car.id);
  const handleStart = () => console.log('start ', car.id);
  const handleStop = () => console.log('stop ', car.id);

  return (
    <div className={s.car}>
      <div className={s.carHeader}>
        <Button handleClick={setCarToUpd}>Select</Button>
        <Button handleClick={handleRemove}>Remove</Button>
        <h5 className={s.carName}>{car.name}</h5>
      </div>
      <div className={s.carMain}>
        <button
          className={s.ctrlBtn}
          onClick={handleStart}
        >A</button>
        <button
          className={s.ctrlBtn}
          onClick={handleStop}
        >B</button>
        <div className={s.carTrack}>
          <CarImg color={car.color} />
          <div className={s.trackFinish}>
            <img src={flag} alt='flag'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
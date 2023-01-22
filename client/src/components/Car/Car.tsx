import { CarType } from '../../interfaces/interfaces';
import CarImg from './CarImg';
import Button from '../../UI/Button/Button';
import flag from './flag.png'
import './car.css';


const Car = ({ car }: { car: CarType }) => {
  const handleSelect = () => console.log('select ', car.id);
  const handleRemove = () => console.log('remove ', car.id);
  const handleStart = () => console.log('start ', car.id);
  const handleStop = () => console.log('stop ', car.id);

  return (
    <div className='car'>
      <div className='car__header'>
        <Button handleClick={handleSelect}>Select</Button>
        <Button handleClick={handleRemove}>Remove</Button>
        <h5 className='car__name'>{car.name}</h5>
      </div>
      <div className='car__main'>
        <button
          className='ctrl-btn'
          onClick={handleStart}
        >A</button>
        <button
          className='ctrl-btn'
          onClick={handleStop}
        >B</button>
        <div className='car__track'>
          <CarImg color={car.color} />
          <div className='track__finish'>
            <img src={flag} alt='flag'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Car;
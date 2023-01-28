import Button from '../../UI/Button/Button';
import s from './UpdateBlock.module.css';

type PropsType = {
  name: string,
  color: string,
  isUpdating: boolean,
  updateName: (name: string) => void,
  updateColor: (color: string) => void,
  dispatch: React.Dispatch<any>,
  updateCar: () => void,
}

const UpdateBlock = ({ name, color, isUpdating, updateName, updateColor, dispatch, updateCar }: PropsType) => {
  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateName(e.target.value));
  };
  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateColor(e.target.value));
  }

  return (
    <div className={s.updateBlock}>
    <input
      type='text'
      value={name}
      onChange={handleChangeName}
      disabled={!isUpdating}
    />
    <input
      type='color'
      value={color}
      onChange={handleChangeColor}
      disabled={!isUpdating}
    />
    <Button handleClick={updateCar} disabled={!isUpdating}>Update</Button>
  </div>
  );
};

export default UpdateBlock;
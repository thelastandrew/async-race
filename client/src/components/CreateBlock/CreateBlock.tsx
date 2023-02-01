import Button from '../../UI/Button/Button';
import s from './CreateBlock.module.css';

const CreateBlock = () => {
  const handleCreate = () => console.log('creating ...');
  return (
    <div className={s.createBlock}>
      <input type='text' />
      <input type='color' />
      <Button handleClick={handleCreate}>Create</Button>
    </div>
  );
};

export default CreateBlock;
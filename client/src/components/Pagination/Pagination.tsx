import Button from '../../UI/Button/Button';
import s from './Pagination.module.css';

const Pagination = () => {
  const handlePrev = () => console.log('move to prev page');
  const handleNext = () => console.log('move to next page');

  return (
    <div className={s.pagination}>
      <Button
        handleClick={handlePrev}
      >Prev</Button>
      <Button
        handleClick={handleNext}
      >Next</Button>
    </div>
  );
};

export default Pagination;

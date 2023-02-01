import Button from '../../UI/Button/Button';
import s from './Pagination.module.css';

type PropsType = {
  setPrevPage: () => void;
  setNextPage: () => void;
  isPrevAvl: boolean;
  isNextPgAvl: boolean;
};

const Pagination = ({ setPrevPage, setNextPage, isPrevAvl, isNextPgAvl }: PropsType) => {

  return (
    <div className={s.pagination}>
      <Button
        handleClick={setPrevPage}
        disabled={!isPrevAvl}
      >Prev</Button>
      <Button
        handleClick={setNextPage}
        disabled={!isNextPgAvl}
      >Next</Button>
    </div>
  );
};

export default Pagination;

import { useState, useEffect } from 'react';
import Button from '../../UI/Button/Button';
import s from './Pagination.module.css';

type PropsType = {
  page: number;
  totalCars: number;
  limit: number;
  handlePrev: () => void;
  handleNext: () => void;
}

const Pagination = ({ page, totalCars, limit, handlePrev, handleNext }: PropsType) => {
  const [lastPage, setLastPage] = useState(1);
  const [isPrevAvailable, setIsPrevAvailable] = useState(false);
  const [isNextAvailable, setIsNextAvailable] = useState(false);

  useEffect(() => {
    setLastPage(Math.ceil(totalCars / limit));
  }, [totalCars, limit]);

  useEffect(() => {
    if (page === 1) {
      setIsPrevAvailable(false);
    } else {
      setIsPrevAvailable(true);
    }
  }, [page]);

  useEffect(() => {
    if (page === lastPage) {
      setIsNextAvailable(false);
    } else {
      setIsNextAvailable(true);
    }
  }, [page, lastPage]);

  return (
    <div className={s.pagination}>
      <Button
        handleClick={handlePrev}
        disabled={(!isPrevAvailable)}
      >Prev</Button>
      <Button
        handleClick={handleNext}
        disabled={!isNextAvailable}
      >Next</Button>
    </div>
  );
};

export default Pagination;

import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Pagination from './Pagination';

const PaginationContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { page, totalCars, limit, setGaragePage } = state.garage;

  const handlePrev = () => {
    dispatch(setGaragePage(page - 1));
  };

  const handleNext = () => {
    dispatch(setGaragePage(page + 1));
  };

  return <Pagination
    handlePrev={handlePrev}
    handleNext={handleNext}
    page={page}
    totalCars={totalCars}
    limit={limit}
  />;
};

export default PaginationContainer;
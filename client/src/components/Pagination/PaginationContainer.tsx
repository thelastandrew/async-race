import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Pagination from './Pagination';

const PaginationContainer = () => {
  const { state, dispatch } = useContext(AppContext);
  const { page, totalCars, limit } = state.garage;

  const handlePrev = () => {
    console.log('prev...');
  };

  const handleNext = () => {
    console.log('next...');
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
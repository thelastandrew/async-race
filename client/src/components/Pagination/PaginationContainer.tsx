import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import Pagination from './Pagination';

const PaginationContainer = () => {

  const { state, dispatch } = useContext(AppContext);
  const { page, setGaragePage, isPrevPgAvl, isNextPgAvl } = state.garage;

  const setNextPage = () => {
    setGaragePage(page+1)(dispatch);
  };
  const setPrevPage = () => {
    setGaragePage(page-1)(dispatch);
  };

  return <Pagination
    setPrevPage={setPrevPage}
    setNextPage={setNextPage}
    isPrevAvl={isPrevPgAvl}
    isNextPgAvl={isNextPgAvl}
  />;
};

export default PaginationContainer;
import { useReducer } from 'react';
import AppContext, { initialState } from './AppContext';
import garageReducer from './garageReducer';
import { ACTION_TYPES } from './actions';
import { CarType } from '../interfaces/interfaces';


const AppState = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(garageReducer, initialState);

  const setCars = (cars: CarType[]) => dispatch({ type: ACTION_TYPES.SET_CARS, payload: cars });
  const setTotal = (totalPages: number) => dispatch({ type: ACTION_TYPES.SET_TOTAL, payload: totalPages });

  return (
    <AppContext.Provider value={{
      cars: state.cars,
      totalCars: state.totalCars,
      page: state.page,
      limit: state.limit,
      setCars,
      setTotal,
     }}>
      { children }
    </AppContext.Provider>
  );
};

export default AppState;
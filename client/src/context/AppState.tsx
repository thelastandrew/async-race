import { useReducer } from 'react';
import AppContext, { initialState, StateType } from './AppContext';
import garageReducer, { GarageAction } from './garageReducer';
import newCarReducer, { NewCarAction } from './newCarReducer';

type ActionType = GarageAction | NewCarAction;

const mainReducer = (state: StateType, action: ActionType) => ({
  garage: garageReducer(state.garage, action as GarageAction),
  newCar: newCarReducer(state.newCar, action as NewCarAction),
});

const AppState = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
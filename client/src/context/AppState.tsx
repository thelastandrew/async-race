import { useReducer } from 'react';
import AppContext, { initState, StateType } from './AppContext';
import garageReducer, { GarageAction } from './garageReducer';
import newCarReducer, { NewCarAction } from './newCarReducer';
import carToUpdReducer, { CarToUpdActions } from './carToUpdReducer.ts';

type ActionType = GarageAction | NewCarAction | CarToUpdActions;

const mainReducer = (state: StateType, action: ActionType) => ({
  garage: garageReducer(state.garage, action as GarageAction),
  newCar: newCarReducer(state.newCar, action as NewCarAction),
  carToUpd: carToUpdReducer(state.carToUpd, action as CarToUpdActions),
});

const AppState = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(mainReducer, initState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
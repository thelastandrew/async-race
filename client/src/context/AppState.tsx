import { useReducer } from 'react';
import AppContext, { initState, StateType } from './AppContext';
import garageReducer, { GarageAction } from './garageReducer';
import carToUpdReducer, { CarToUpdAction } from './carToUpdReducer';

type Action = GarageAction | CarToUpdAction;

const mainReducer = (state: StateType, action: Action) => ({
  garage: garageReducer(state.garage, action as GarageAction),
  carToUpd: carToUpdReducer(state.carToUpd, action as CarToUpdAction),
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
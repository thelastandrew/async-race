import { useReducer } from 'react';
import AppContext, { initialState, StateType } from './AppContext';
import garageReducer, { GarageAction } from './garageReducer';

type ActionType = GarageAction;

const mainReducer = (state: StateType, action: ActionType) => ({
  garage: garageReducer(state.garage, action as GarageAction),
});

const AppState = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      { children }
    </AppContext.Provider>
  );
};

export default AppState;
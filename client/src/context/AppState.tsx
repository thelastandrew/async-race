import { useReducer } from 'react';
import AppContext, { initState, StateType } from './AppContext';

const mainReducer = (state: StateType, action: { type: string }) => ({
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
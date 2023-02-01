import { createContext, Dispatch } from 'react';
import { GarageState, initGarageState } from './garageReducer';

// Global state
export type StateType = {
  garage: GarageState,
};

export const initState = {
  garage: initGarageState,
};

export default createContext<{
  state: StateType,
  dispatch: Dispatch<any>
}>({
  state: initState,
  dispatch: () => null,
});
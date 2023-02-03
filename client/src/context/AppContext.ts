import { createContext, Dispatch } from 'react';
import { GarageState, initGarageState } from './garageReducer';
import { CarToUpdState, initCarToUpdState } from './carToUpdReducer';

// Global state
export type StateType = {
  garage: GarageState,
  carToUpd: CarToUpdState,
};

export const initState = {
  garage: initGarageState,
  carToUpd: initCarToUpdState,
};

export default createContext<{
  state: StateType,
  dispatch: Dispatch<any>
}>({
  state: initState,
  dispatch: () => null,
});
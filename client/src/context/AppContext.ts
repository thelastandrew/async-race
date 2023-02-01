import { createContext, Dispatch } from 'react';

// Global state
export type StateType = {
};

export const initState = {
};

export default createContext<{
  state: StateType,
  dispatch: Dispatch<any>
}>({
  state: initState,
  dispatch: () => null,
});
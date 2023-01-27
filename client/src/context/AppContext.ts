import React, { createContext } from 'react';
import { CarType } from '../interfaces/interfaces';

// Garage State
export type GarageStateType = {
  cars: CarType[];
  totalCars: number;
  page: number;
  limit: number;
};

export const initialGarageState: GarageStateType = {
  cars: [],
  totalCars: 0,
  page: 1,
  limit: 5,
};


//Global state
export type StateType = {
  garage: GarageStateType,
};

export const initialState = {
  garage: initialGarageState,
}

export default createContext<{
  state: StateType,
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
});
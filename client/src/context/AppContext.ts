import React, { createContext } from 'react';
import { CarType } from '../interfaces/interfaces';
import { GarageAction, setCars, setTotal, addCar } from './garageReducer';
import { NewCarAction, updateName, updateColor } from './newCarReducer';
import { generateColor } from '../utils/utils';

// Garage State
export type GarageStateType = {
  cars: CarType[];
  totalCars: number;
  page: number;
  limit: number;
  setCars: (cars: CarType[]) => GarageAction,
  setTotal: (totalCars: number) => GarageAction,
  addCar: (car: CarType) => GarageAction,
};

export const initialGarageState: GarageStateType = {
  cars: [],
  totalCars: 0,
  page: 1,
  limit: 5,
  setCars,
  setTotal,
  addCar,
};

// New car state
export type NewCarState = {
  name: string,
  color: string,
  updateName: (name: string) => NewCarAction,
  updateColor: (color: string) => NewCarAction,
};

export const initialNewCarState = {
  name: '',
  color: generateColor(),
  updateName,
  updateColor,
}

// Global state
export type StateType = {
  garage: GarageStateType,
  newCar: NewCarState,
};

export const initialState = {
  garage: initialGarageState,
  newCar: initialNewCarState,
};

export default createContext<{
  state: StateType,
  dispatch: React.Dispatch<any>
}>({
  state: initialState,
  dispatch: () => null,
});
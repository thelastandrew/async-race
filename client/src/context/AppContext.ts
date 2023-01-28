import React, { createContext } from 'react';
import { CarType } from '../interfaces/interfaces';
import { GarageAction, setCars, setTotal, addCar, updateCars } from './garageReducer';
import { NewCarAction, updateName, updateColor } from './newCarReducer';
import { generateColor } from '../utils/utils';
import { CarToUpdActions, setCarToUpdId, setCarToUpdName, setCarToUpdColor, toggleIsUpdating } from './carToUpdReducer.ts';

// Garage State
export type GarageState = {
  cars: CarType[];
  totalCars: number;
  page: number;
  limit: number;
  setCars: (cars: CarType[]) => GarageAction,
  setTotal: (totalCars: number) => GarageAction,
  addCar: (car: CarType) => GarageAction,
  updateCars: (car: CarType) => GarageAction,
};

export const initGarageState: GarageState = {
  cars: [],
  totalCars: 0,
  page: 1,
  limit: 5,
  setCars,
  setTotal,
  addCar,
  updateCars,
};

// New car state
export type NewCarState = {
  name: string,
  color: string,
  updateName: (name: string) => NewCarAction,
  updateColor: (color: string) => NewCarAction,
};

export const initNewCarState = {
  name: '',
  color: generateColor(),
  updateName,
  updateColor,
};

// Car to update state
export type CarToUpdState = {
  id: number,
  name: string,
  color: string,
  isUpdating: boolean,
  setCarToUpdId: (id: number) => CarToUpdActions,
  setCarToUpdName: (name: string) => CarToUpdActions,
  setCarToUpdColor: (color: string) => CarToUpdActions,
  toggleIsUpdating: (isUpdating: boolean) => CarToUpdActions,
};

export const initCarToUpdState: CarToUpdState = {
  id: 0,
  name: '',
  color: '#000000',
  isUpdating: false,
  setCarToUpdId,
  setCarToUpdName,
  setCarToUpdColor,
  toggleIsUpdating,
};

// Global state
export type StateType = {
  garage: GarageState,
  newCar: NewCarState,
  carToUpd: CarToUpdState,
};

export const initState = {
  garage: initGarageState,
  newCar: initNewCarState,
  carToUpd: initCarToUpdState,
};

export default createContext<{
  state: StateType,
  dispatch: React.Dispatch<any>
}>({
  state: initState,
  dispatch: () => null,
});
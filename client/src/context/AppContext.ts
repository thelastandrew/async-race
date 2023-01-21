import { createContext } from 'react';
import { CarType } from '../interfaces/interfaces';

export type StateType = {
  cars: CarType[];
  totalCars: number;
  page: number;
  limit: number;
  setCars: (cars: CarType[]) => void,
  setTotal: (totalPages: number) => void,
}

export const initialState: StateType = {
  cars: [],
  totalCars: 0,
  page: 1,
  limit: 5,
  setCars: (cars: CarType[]) => { },
  setTotal: (totalPages: number) => { },
};

export default createContext(initialState);

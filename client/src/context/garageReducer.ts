import { GarageStateType } from './AppContext';
import { ACTION_TYPES } from './actions';
import { CarType } from '../interfaces/interfaces';

export type GarageAction = {
  type: ACTION_TYPES,
  payload: CarType[] | CarType | number,
}

const garageReducer = (state: GarageStateType, action: GarageAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CARS: {
      return { ...state, cars: action.payload as CarType[] };
    }
    case ACTION_TYPES.SET_TOTAL: {
      return { ...state, totalCars: action.payload as number };
    }
    case ACTION_TYPES.ADD_CAR: {
      return { ...state, cars: [...state.cars, action.payload as CarType] }
    }
    default: {
      return state;
    }
  }
};

export const setCars = (cars: CarType[]) => ({ type: ACTION_TYPES.SET_CARS, payload: cars });
export const setTotal = (totalCars: number) => ({ type: ACTION_TYPES.SET_TOTAL, payload: totalCars });
export const addCar = (car: CarType) => ({ type: ACTION_TYPES.ADD_CAR, payload: car });

export default garageReducer;
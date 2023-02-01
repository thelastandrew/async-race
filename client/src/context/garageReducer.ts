import { Dispatch } from 'react';
import { ACTION_TYPES } from './actions';
import { CarType } from '../interfaces/interfaces';
import { garageAPI } from '../api/api';


const setCarsAC = (cars: CarType[]) => ({ type: ACTION_TYPES.SET_CARS, payload: cars });
const setTotalCarsAC = (totalCars: number) => ({ type: ACTION_TYPES.SET_TOTAL_CARS, payload: totalCars });
const toggleIsFetchingCarsAC = (isFetchingCars: boolean) => ({ type: ACTION_TYPES.TOGGLE_IS_FETCHING_CARS, payload: isFetchingCars });

export const getCars = (page: number) => (dispatch: Dispatch<any>) => {
  dispatch(toggleIsFetchingCarsAC(true));
  garageAPI.getCarsByPage(page)
    .then(response => {
      dispatch(setCarsAC(response.data));
      dispatch(setTotalCarsAC(response.count));
      dispatch(toggleIsFetchingCarsAC(false));
    });
};


export type GarageState = {
  cars: CarType[];
  page: number;
  totalCars: number;
  isFetchingCars: boolean;
  getCars: typeof getCars;
};

export type GarageAction = {
  type: ACTION_TYPES;
  payload: number | boolean | CarType[];
};

export const initGarageState: GarageState = {
  cars: [],
  page: 1,
  totalCars: 0,
  isFetchingCars: false,
  getCars,
};

const garageReducer = (state: GarageState, action: GarageAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CARS: {
      return { ...state, cars: action.payload as CarType[] };
    }
    case ACTION_TYPES.SET_TOTAL_CARS: {
      return { ...state, totalCars: action.payload as number };
    }
    case ACTION_TYPES.TOGGLE_IS_FETCHING_CARS: {
      return { ...state, isFetchingCars: action.payload as boolean};
    }
    default: {
      return state;
    }
  }
};

export default garageReducer;
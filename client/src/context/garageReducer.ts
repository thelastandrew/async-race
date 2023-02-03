import { Dispatch } from 'react';
import { ACTION_TYPES } from './actions';
import { CarType } from '../interfaces/interfaces';
import { garageAPI } from '../api/api';
import { generateCarName, generateColor, getTotalPages } from '../utils/utils';

// Action creators
const setCarsAC = (cars: CarType[]) => ({ type: ACTION_TYPES.SET_CARS, payload: cars });
const setGaragePageAC = (page: number) => ({ type: ACTION_TYPES.SET_GARAGE_PAGE, payload: page });
const setTotalCarsAC = (totalCars: number) => ({ type: ACTION_TYPES.SET_TOTAL_CARS, payload: totalCars });
const toggleIsFetchingCarsAC = (isFetchingCars: boolean) => ({ type: ACTION_TYPES.TOGGLE_IS_FETCHING_CARS, payload: isFetchingCars });
const toggleIsPrevAvlAC = (isAvl: boolean) => ({ type: ACTION_TYPES.TOGGLE_IS_PREV_GARAGE_PG_AVL, payload: isAvl });
const toggleIsNextAvlAC = (isAvl: boolean) => ({ type: ACTION_TYPES.TOGGLE_IS_NEXT_GARAGE_PG_AVL, payload: isAvl });
const addCarAC = (car: CarType) => ({ type: ACTION_TYPES.ADD_CAR, payload: car });
const updateCarsListAC = (car: CarType) => ({ type: ACTION_TYPES.UPDATE_CARS_LIST, payload: car });

// Methods
const getCars = (page: number) => (dispatch: Dispatch<any>) => {
  dispatch(toggleIsFetchingCarsAC(true));
  garageAPI.getCarsByPage(page)
    .then(response => {
      dispatch(setCarsAC(response.data));
      dispatch(setTotalCarsAC(response.count));
      dispatch(toggleIsFetchingCarsAC(false));
    });
};

const setGaragePage = (page: number) => (dispatch: Dispatch<any>) => {
  dispatch(setGaragePageAC(page));
};

const checkPgAvl = (page: number, totalCars: number, limit = 5) => (dispatch: Dispatch<any>) => {
  const totalPages = getTotalPages(totalCars, limit);
  if (page === 1) {
    dispatch(toggleIsPrevAvlAC(false));
  } else {
    dispatch(toggleIsPrevAvlAC(true));
  }
  if (page >= totalPages) {
    dispatch(toggleIsNextAvlAC(false));
  } else {
    dispatch(toggleIsNextAvlAC(true));
  }
};

const addCar = (name: string, color: string, cars: CarType[], totalCars: number, limit = 5) => (dispatch: Dispatch<any>) => {
  garageAPI.createNewCar(name, color)
    .then(response => {
      dispatch(setTotalCarsAC(totalCars + 1));
      if (cars.length < limit) {
        dispatch(addCarAC(response));
      }
    });
};

const updateCar = (id: number, name: string, color: string) => (dispatch: Dispatch<any>) => {
  garageAPI.updateCar(id, name, color)
    .then(data => {
      dispatch(updateCarsListAC(data));
    });
};

const generateNCars = (n: number, cars: CarType[], totalCars: number, limit = 5) => (dispatch: Dispatch<any>) => {
  let totalClone = totalCars;
  const carsClone = [...cars];
  for (let i = 0; i < n; i ++) {
    const name = generateCarName();
    const color = generateColor();
    garageAPI.createNewCar(name, color)
      // eslint-disable-next-line no-loop-func
      .then(response => {
        totalClone = totalClone + 1;
        dispatch(setTotalCarsAC(totalClone));
        if (carsClone.length < limit) {
          dispatch(addCarAC(response));
          carsClone.push({ id: carsClone.length, name, color });
        }
      });
  }
};

export type GarageState = {
  cars: CarType[];
  page: number;
  totalCars: number;
  limit: number;
  isFetchingCars: boolean;
  isPrevPgAvl: boolean;
  isNextPgAvl: boolean;
  getCars: typeof getCars;
  setGaragePage: typeof setGaragePage;
  checkPgAvl: typeof checkPgAvl;
  addCar: typeof addCar;
  updateCar: typeof updateCar,
  generateNCars: typeof generateNCars,
};

export type GarageAction = {
  type: ACTION_TYPES;
  payload: number | boolean | CarType[] | CarType;
};

export const initGarageState: GarageState = {
  cars: [],
  page: 1,
  totalCars: 0,
  limit: 5,
  isFetchingCars: false,
  isPrevPgAvl: false,
  isNextPgAvl: false,
  getCars,
  setGaragePage,
  checkPgAvl,
  addCar,
  updateCar,
  generateNCars,
};

const garageReducer = (state: GarageState, action: GarageAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CARS: {
      return { ...state, cars: action.payload as CarType[] };
    }
    case ACTION_TYPES.SET_GARAGE_PAGE: {
      return { ...state, page: action.payload as number };
    }
    case ACTION_TYPES.SET_TOTAL_CARS: {
      return { ...state, totalCars: action.payload as number };
    }
    case ACTION_TYPES.TOGGLE_IS_FETCHING_CARS: {
      return { ...state, isFetchingCars: action.payload as boolean };
    }
    case ACTION_TYPES.TOGGLE_IS_PREV_GARAGE_PG_AVL: {
      return { ...state, isPrevPgAvl: action.payload as boolean };
    }
    case ACTION_TYPES.TOGGLE_IS_NEXT_GARAGE_PG_AVL: {
      return { ...state, isNextPgAvl: action.payload as boolean };
    }
    case ACTION_TYPES.ADD_CAR: {
      return { ...state, cars: [...state.cars, action.payload as CarType] };
    }
    case ACTION_TYPES.UPDATE_CARS_LIST: {
      const updatedList = state.cars.map(car => car.id === (action.payload as CarType).id ? action.payload as CarType : car);
      return { ...state, cars: updatedList };
    }
    default: {
      return state;
    }
  }
};

export default garageReducer;
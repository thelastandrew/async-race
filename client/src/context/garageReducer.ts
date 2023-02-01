import { Dispatch } from 'react';
import { ACTION_TYPES } from './actions';
import { CarType } from '../interfaces/interfaces';
import { garageAPI } from '../api/api';
import { getTotalPages } from '../utils/utils';

// Action creators
const setCarsAC = (cars: CarType[]) => ({ type: ACTION_TYPES.SET_CARS, payload: cars });
const setGaragePageAC = (page: number) => ({ type: ACTION_TYPES.SET_GARAGE_PAGE, payload: page });
const setTotalCarsAC = (totalCars: number) => ({ type: ACTION_TYPES.SET_TOTAL_CARS, payload: totalCars });
const toggleIsFetchingCarsAC = (isFetchingCars: boolean) => ({ type: ACTION_TYPES.TOGGLE_IS_FETCHING_CARS, payload: isFetchingCars });
const toggleIsPrevAvlAC = (isAvl: boolean) => ({ type: ACTION_TYPES.TOGGLE_IS_PREV_GARAGE_PG_AVL, payload: isAvl });
const toggleIsNextAvlAC = (isAvl: boolean) => ({ type: ACTION_TYPES.TOGGLE_IS_NEXT_GARAGE_PG_AVL, payload: isAvl });

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

const checkPgAvl = (page: number, totalCars: number, limit: number) => (dispatch: Dispatch<any>) => {
  const totalPages = getTotalPages(totalCars, limit);
  if (page === 1) {
    dispatch(toggleIsPrevAvlAC(false));
  } else {
    dispatch(toggleIsPrevAvlAC(true));
  }
  if (page === totalPages || page > totalPages) {
    dispatch(toggleIsNextAvlAC(false));
  } else {
    dispatch(toggleIsNextAvlAC(true));
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
};

export type GarageAction = {
  type: ACTION_TYPES;
  payload: number | boolean | CarType[];
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
    default: {
      return state;
    }
  }
};

export default garageReducer;
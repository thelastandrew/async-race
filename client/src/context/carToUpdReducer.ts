import { Dispatch } from 'react';
import { ACTION_TYPES } from './actions';

// Action creators
const toggleIsUpdating = (isUpdating: boolean) => ({ type: ACTION_TYPES.TOGGLE_IS_UPDATING, payload: isUpdating });
const setIdToUpd = (id: number) => ({ type: ACTION_TYPES.SET_ID_TO_UPD, payload: id });
const setNameToUpd = (name: string) => ({ type: ACTION_TYPES.SET_NAME_TO_UPD, payload: name });
const setColorToUpd = (color: string) => ({ type: ACTION_TYPES.SET_COLOR_TO_UPD, payload: color });

// Methods
const setCarToUpd = (id: number, name: string, color: string) => (dispatch: Dispatch<any>) => {
  dispatch(toggleIsUpdating(true));
  dispatch(setIdToUpd(id));
  dispatch(setNameToUpd(name));
  dispatch(setColorToUpd(color));
};

const updateName = (name: string) => (dispatch: Dispatch<any>) => {
  dispatch(setNameToUpd(name));
};

const updateColor = (color: string) => (dispatch: Dispatch<any>) => {
  dispatch(setColorToUpd(color));
};

const setIsUpdating = (isUpdating: boolean) => (dispatch: Dispatch<any>) => {
  dispatch(toggleIsUpdating(isUpdating));
};

export type CarToUpdState = {
  id: number,
  name: string,
  color: string,
  isUpdating: boolean,
  setCarToUpd: typeof setCarToUpd,
  updateName: typeof updateName,
  updateColor: typeof updateColor,
  setIsUpdating: typeof setIsUpdating,
};

export type CarToUpdAction = {
  type: ACTION_TYPES,
  payload: string | number | boolean,
}

export const initCarToUpdState: CarToUpdState = {
  id: 0,
  name: '',
  color: '#000000',
  isUpdating: false,
  setCarToUpd,
  updateName,
  updateColor,
  setIsUpdating,
};

const carToUpdReducer = (state: CarToUpdState, action: CarToUpdAction) => {
  switch (action.type) {
    case ACTION_TYPES.TOGGLE_IS_UPDATING: {
      return { ...state, isUpdating: action.payload as boolean };
    }
    case ACTION_TYPES.SET_ID_TO_UPD: {
      return { ...state, id: action.payload as number };
    }
    case ACTION_TYPES.SET_NAME_TO_UPD: {
      return { ...state, name: action.payload as string };
    }
    case ACTION_TYPES.SET_COLOR_TO_UPD: {
      return { ...state, color: action.payload as string };
    }
    default: {
      return state;
    }
  }
};

export default carToUpdReducer;
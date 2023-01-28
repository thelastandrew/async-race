import { ACTION_TYPES } from './actions';
import { CarToUpdState } from './AppContext';

export type CarToUpdActions = {
  type: ACTION_TYPES,
  payload: string | number | boolean,
};

const carToUpdReducer = (state: CarToUpdState, action: CarToUpdActions) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CAR_TO_UPD_ID: {
      return { ...state, id: action.payload as number };
    }
    case ACTION_TYPES.SET_CAR_TO_UPD_NAME: {
      return { ...state, name: action.payload as string };
    }
    case ACTION_TYPES.SET_CAR_TO_UPD_COLOR: {
      return { ...state, color: action.payload as string };
    }
    case ACTION_TYPES.TOGGLE_IS_UPDATING: {
      return { ...state, isUpdating: action.payload as boolean };
    }
    default: {
      return state;
    }
  }
}

export const setCarToUpdId = (id: number) => ({ type: ACTION_TYPES.SET_CAR_TO_UPD_ID, payload: id });
export const setCarToUpdName = (name: string) => ({ type: ACTION_TYPES.SET_CAR_TO_UPD_NAME, payload: name });
export const setCarToUpdColor = (color: string) => ({ type: ACTION_TYPES.SET_CAR_TO_UPD_COLOR, payload: color });
export const toggleIsUpdating = (isUpdating: boolean) => ({ type: ACTION_TYPES.TOGGLE_IS_UPDATING, payload: isUpdating });

export default carToUpdReducer;
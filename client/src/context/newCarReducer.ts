import { ACTION_TYPES } from './actions';
import { NewCarState } from './AppContext';

export type NewCarAction = {
  type: ACTION_TYPES,
  payload: string,
}

const newCarReducer = (state: NewCarState, action: NewCarAction) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_NEW_CAR_NAME: {
      return { ...state, name: action.payload };
    }
    case ACTION_TYPES.UPDATE_NEW_CAR_COLOR: {
      return { ...state, color: action.payload };
    }
    default: {
      return state
    }
  }
};

export const updateName = (name: string) => ({ type: ACTION_TYPES.UPDATE_NEW_CAR_NAME, payload: name });
export const updateColor = (color: string) => ({ type: ACTION_TYPES.UPDATE_NEW_CAR_COLOR, payload: color });

export default newCarReducer;
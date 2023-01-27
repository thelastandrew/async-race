import { GarageStateType } from './AppContext';
import { ACTION_TYPES } from './actions';
import { CarType } from '../interfaces/interfaces';

export type GarageAction = {
  type: ACTION_TYPES,
  payload: CarType[] | number,
}

const garageReducer = (state: GarageStateType, action: GarageAction) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CARS: {
      return { ...state,  cars: action.payload as CarType[] };
    }
    case ACTION_TYPES.SET_TOTAL: {
      return { ...state, totalCars: action.payload as number };
    }
    default: {
      return state;
    }
  }
};

export default garageReducer;
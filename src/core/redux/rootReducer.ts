import { combineReducers } from 'redux';
import { CalculatorStateReducer } from './calulater/reducer';
import { popupReducer } from './popup/reducer';

export const rootReducer = combineReducers({
  calculator: CalculatorStateReducer,
  popup: popupReducer
});

export type RootState = ReturnType<typeof rootReducer>
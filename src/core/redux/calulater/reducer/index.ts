import { CalculatorActionTypes, CalculatorState } from '../actions';

const initialState: CalculatorState = {
  isOff: false,
  currentDisplay: 0,
  sign: true
};

export const CalculatorStateReducer = (state = initialState, action: CalculatorActionTypes): CalculatorState => {

  switch (action.type) {
    default:
      return state;
  }
};
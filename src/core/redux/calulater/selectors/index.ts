import { RootState } from '../../rootReducer';
import { CalculatorState } from '../actions';

const getCalculatorState = (state: RootState): CalculatorState => state.calculator;

export const getCurrentDisplay = (state: RootState) => getCalculatorState(state)?.currentDisplay;
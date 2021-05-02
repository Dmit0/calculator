import { ReactNode } from 'react';
import { toast } from 'react-toastify';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { ArithmeticSign, ImmediateArithmetic, Memory } from '../../../enums/calculator-button.enum';
import { historyAdd, historyGet } from '../../../services';
import { openPopup } from '../../popup/actions';
import { RootState } from '../../rootReducer';
import {
  ARITHMETIC_OPERATION,
  CalculatorActionTypes,
  IMMEDIATE_ARITHMETIC,
  MEMORY_OPERATION,
  NUM_OPERATION,
  QUITE,
  SET_HISTORY,
} from './calculator.types';

type ThunkType = ThunkAction<Promise<void>, RootState, unknown, Action<string>>

export const arithmeticOperation = (operation: ArithmeticSign, subDisplay: string, currentDisplay: string): ThunkType => {
  return async dispatch => {
    if (subDisplay && currentDisplay && currentDisplay.slice(-1) !== '.' && (currentDisplay !== '0' || operation !== ArithmeticSign.DIVISION)) {
      const history = `${subDisplay}${currentDisplay}`
      const response = await historyAdd(history)
      if (response) {
        dispatch(arithmeticOperationAction(operation))
      }
    } else dispatch(arithmeticOperationAction(operation))
  }
}

export const immediateArithmetic = (operation: ImmediateArithmetic, subDisplay?: string, currentDisplay?: string): ThunkType => {
  return async dispatch => {
    if (subDisplay && currentDisplay && ImmediateArithmetic.EXACTLY) {
      const history = `${subDisplay}${currentDisplay}`
      const response = await historyAdd(history)
      if (response) {
        dispatch(immediateArithmeticAction(operation))
      }
    } else dispatch(immediateArithmeticAction(operation))
  }
}

export const getHistory = (popup: ReactNode): ThunkType => {
  return async dispatch => {
      const history = await historyGet()
      if (history) {
        dispatch(setHistory(history.map(history=> (history.history))))
        dispatch(openPopup(popup))
      } else toast.warn('cannot get history')
  }
}

export const setHistory = (history: string[]): CalculatorActionTypes  => ({
  type: SET_HISTORY,
  history
});

export const arithmeticOperationAction = (operation: ArithmeticSign): CalculatorActionTypes  => ({
  type: ARITHMETIC_OPERATION,
  operation
});

export const setQuiteState = (isOff: boolean): CalculatorActionTypes  => ({
  type: QUITE,
  isOff
});

export const immediateArithmeticAction = (operation: ImmediateArithmetic): CalculatorActionTypes  => ({
  type: IMMEDIATE_ARITHMETIC,
  operation
});

export const memoryOperation = (operation: Memory): CalculatorActionTypes  => ({
  type: MEMORY_OPERATION,
  operation
});

export const numberOperation = (num: string): CalculatorActionTypes  => ({
  type: NUM_OPERATION,
  num
});
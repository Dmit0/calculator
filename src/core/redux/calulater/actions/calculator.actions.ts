import { ArithmeticSign, ImmediateArithmetic, Memory } from '../../../enums/calculator-button.enum';
import {
  ARITHMETIC_OPERATION,
  CalculatorActionTypes,
  IMMEDIATE_ARITHMETIC,
  MEMORY_OPERATION,
  NUM_OPERATION,
  QUITE,
  SWITCH_SIGN,
} from './calculator.types';

export const setQuiteState = (isOff: boolean): CalculatorActionTypes  => ({
  type: QUITE,
  isOff
});

export const switchSign = (): CalculatorActionTypes  => ({
  type: SWITCH_SIGN,
});

export const immediateArithmetic = (operation: ImmediateArithmetic): CalculatorActionTypes  => ({
  type: IMMEDIATE_ARITHMETIC,
  operation
});

export const memoryOperation = (operation: Memory): CalculatorActionTypes  => ({
  type: MEMORY_OPERATION,
  operation
});

export const arithmeticOperation = (operation: ArithmeticSign): CalculatorActionTypes  => ({
  type: ARITHMETIC_OPERATION,
  operation
});

export const numberOperation = (num: number | string): CalculatorActionTypes  => ({
  type: NUM_OPERATION,
  num
});
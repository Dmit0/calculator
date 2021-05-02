import { ArithmeticSign, ImmediateArithmetic, Memory } from '../../../enums/calculator-button.enum';

export const QUITE = 'QUITE';
export const IMMEDIATE_ARITHMETIC = 'IMMEDIATE_ARITHMETIC';
export const MEMORY_OPERATION = 'MEMORY_OPERATION';
export const ARITHMETIC_OPERATION = 'ARITHMETIC_OPERATION';
export const NUM_OPERATION = 'NUM_OPERATION';
export const SET_HISTORY = 'SET_HISTORY';

export interface CalculatorState {
  isOff: boolean,
  currentDisplay: string,
  subDisplay: string,
  wasCalculated: boolean,
  memory: string,
  history: string[]
}

interface I_QUITE_STATE {
  type: typeof QUITE,
  isOff: boolean
}

interface I_SET_HISTORY {
  type: typeof SET_HISTORY,
  history: string[]
}

interface I_IMMEDIATE_ARITHMETIC {
  type: typeof IMMEDIATE_ARITHMETIC,
  operation: ImmediateArithmetic
}

interface I_MEMORY_OPERATION {
  type: typeof MEMORY_OPERATION,
  operation: Memory
}

interface I_ARITHMETIC_OPERATION {
  type: typeof ARITHMETIC_OPERATION,
  operation: ArithmeticSign
}

interface I_NUM_OPERATION {
  type: typeof NUM_OPERATION,
  num: string
}

export type CalculatorActionTypes = I_QUITE_STATE
  | I_IMMEDIATE_ARITHMETIC
  | I_MEMORY_OPERATION
  | I_ARITHMETIC_OPERATION
  | I_NUM_OPERATION
  | I_SET_HISTORY
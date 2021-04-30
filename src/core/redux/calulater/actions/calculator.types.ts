import { ArithmeticSign, ImmediateArithmetic, Memory } from '../../../enums/calculator-button.enum';

export const QUITE = 'QUITE';
export const SWITCH_SIGN = 'SWITCH_SIGN';
export const IMMEDIATE_ARITHMETIC = 'IMMEDIATE_ARITHMETIC';
export const MEMORY_OPERATION = 'MEMORY_OPERATION';
export const ARITHMETIC_OPERATION = 'ARITHMETIC_OPERATION';
export const NUM_OPERATION = 'NUM_OPERATION';

export interface CalculatorState {
  isOff: boolean,
  currentDisplay: number,
  sign: boolean
}

interface QUITE_STATE {
  type: typeof QUITE,
  isOff: boolean
}

interface SWITCH_SIGN {
  type: typeof SWITCH_SIGN,
}

interface IMMEDIATE_ARITHMETIC {
  type: typeof IMMEDIATE_ARITHMETIC,
  operation: ImmediateArithmetic
}

interface MEMORY_OPERATION {
  type: typeof MEMORY_OPERATION,
  operation: Memory
}

interface ARITHMETIC_OPERATION {
  type: typeof ARITHMETIC_OPERATION,
  operation: ArithmeticSign
}

interface NUM_OPERATION {
  type: typeof NUM_OPERATION,
  num: number | string
}

export type CalculatorActionTypes = QUITE_STATE | SWITCH_SIGN | IMMEDIATE_ARITHMETIC | MEMORY_OPERATION | ARITHMETIC_OPERATION | NUM_OPERATION
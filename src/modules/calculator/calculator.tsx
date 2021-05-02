import React from 'react';
import './calculator.css';
import { useDispatch } from 'react-redux';
import { getHistory } from '../../core/redux/calulater/actions';
import { CalculatorDisplay } from './components/display/display';
import { CalculatorToolBox } from './components/tool-box/tool-box';
import { History } from '../history/history';

export const Calculator: React.FC = () => {

  const dispatch = useDispatch()

  const historyHandler = () => {
      dispatch(getHistory(<History/>))
  }

  return (
      <div className='calculator'>
        <div className='calculator-tools'>
          <button className='calculator-history' onClick={historyHandler}>History</button>
          <CalculatorDisplay/>
          <CalculatorToolBox/>
        </div>
      </div>
  );
}
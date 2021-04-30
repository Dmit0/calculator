import React from 'react';
import './display.css';
import { useSelector } from 'react-redux';
import { getCurrentDisplay, getIsOff } from '../../../../core/redux/calulater/selectors';

export const CalculatorDisplay: React.FC = () => {

  const display = useSelector(getCurrentDisplay);
  const isOff = useSelector(getIsOff)

  return (
    <div className='display'>
      <span className='display-text'>
        { !isOff && display }
      </span>
    </div>
  );
}
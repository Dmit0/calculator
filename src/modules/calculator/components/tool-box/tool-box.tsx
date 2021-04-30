import React from 'react';
import { useDispatch } from 'react-redux';
import toolBoxList from '../../../../core/static/calculator-items';
import { CalculatorToolBoxItem } from './tool-box.item';

export const CalculatorToolBox: React.FC = () => {
  const dispatch = useDispatch()
  return (
      <div className='tool-box-items'>
        { toolBoxList(dispatch).buttons.map((item) => (
          <CalculatorToolBoxItem
            element={item.element}
            onClick={item.onClick}
            type={item.type}
          />)) }
      </div>
  );
}
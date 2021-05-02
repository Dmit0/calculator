import React from 'react';
import { useSelector } from 'react-redux';
import { getHistory } from '../../core/redux/calulater/selectors';
import './history.css';

export const History: React.FC = () => {

  const history = useSelector(getHistory) || [];

  return (
    <div className='history'>
      { history?.map(historyItem => ( <span key={historyItem}>{ historyItem }</span>)) }
    </div>
  );
}
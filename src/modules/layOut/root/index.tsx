import React from 'react';
import './lay-out.css';
import { PopupContainer } from '../../popup/popup';
import { Toast } from '../../toast/toast';

export const RootLayOut = ({ children }: {children: JSX.Element[] | JSX.Element}) => {
  return (
    <>
      <Toast/>
      <PopupContainer/>
      <div className="app">
          { children }
      </div>
    </>
  );
};
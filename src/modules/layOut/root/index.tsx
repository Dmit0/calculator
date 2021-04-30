import React from 'react';
import './lay-out.css';

export const RootLayOut = ({ children }: {children: JSX.Element[] | JSX.Element}) => {
  return (
      <div className="app">
          { children }
      </div>
  );
};
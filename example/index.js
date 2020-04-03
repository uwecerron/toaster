import React, { Component } from 'react';
import { render } from 'react-dom';
import { withToastProvider } from '../Toast';
import ToastImplementation from './ToastImplementation';
import './style.css';

function App() {
  return (
    <div>
      <Child />

    </div>
  );
}

const AppWithToastProvider = withToastProvider(App);

render(<AppWithToastProvider />, document.getElementById('root'));


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.scss';

const App = ({ onButtonClick, onDecrement, onIncrement, counter }) => (
  <div className="app-wrapper">
    <Switch>
      <Route exact path="/" component={() => <div>homepage</div>} />
    </Switch>
    <div>
      <button onClick={onDecrement}>-</button>
      <p>Counter : {counter}</p>
      <button onClick={onIncrement}>+</button>
    </div>
    <button onClick={onButtonClick}>
      Click me!
    </button>
  </div>
);

export default App;

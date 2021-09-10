import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducer/reducer'
import * as actionType from "./actions/actionType";

import './App.css';
import Parent from './components/Parent';

const notification = store => next => action => {
  if(action.type === actionType.UPDATE_PRODUCT || action.type === actionType.ADD_PRODUCT) {
    alert("Operation Succesful [" + action.type + "]");
  }

  next(action);
};

const store = createStore(reducer, applyMiddleware(notification));

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <Parent />
      </Provider>
    </div>
  );
}

export default App;

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {reducer} from './reducer/reducer'

import './App.css';
import Parent from './components/Parent';

const store = createStore(reducer);

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

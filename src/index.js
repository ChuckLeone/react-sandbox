import 'core-js/fn/object/assign';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import todoApp from './sources/reducers/index'
import App from './components/App';

let store = createStore(todoApp)

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
   //ReactDOM.render(<App />, document.getElementById('app'));

)
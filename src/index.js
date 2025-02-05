import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './App.css'
import ReduxThunk from 'redux-thunk'
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './redux/reducer'
// import 'bootstrap-css-only/css/bootstrap.min.css'
// import 'mdbreact/dist/css/mdb.css'
// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const storeReducer = createStore(Reducer, {}, applyMiddleware(ReduxThunk))

ReactDOM.render(
    <Provider store={storeReducer}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
     document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

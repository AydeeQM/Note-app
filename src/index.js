import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "redux-zero/react";
import store from "./store";
import { componentWillMount } from './actions';

const Index = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

componentWillMount()
ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();

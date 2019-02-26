import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import App from './components/App';

const rootElement = document.getElementById('app');

if(rootElement){
    ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
        rootElement
    );
}

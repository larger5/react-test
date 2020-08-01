import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import CompanyDemo from './component/CompanyDemo'
import {Provider} from 'react-redux'
import store from './store';

const App = (
    <Provider store={store}>
        <CompanyDemo/>
    </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
serviceWorker.unregister();

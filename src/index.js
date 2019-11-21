import React from 'react';
import ReactDOM from 'react-dom';
import Main from './App';
import {Provider} from '../src/store/store';
ReactDOM.render(<div>
    <Provider>
    <Main />
    </Provider></div> , document.getElementById('root'));

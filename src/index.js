import React from 'react';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {render} from 'react-dom';

render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();

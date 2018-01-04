import React, { Component } from 'react';
import ReactDOM from 'react-dom';


import Main from '../ReactRedux/containeres/main';

import { Provider } from 'react-redux';
//import store
import  store  from '../ReactRedux/store';




if (document.getElementById('example')) {
    ReactDOM.render(
        <Provider store={store}>
            <Main/>
        </Provider>
        , document.getElementById('example'));
}

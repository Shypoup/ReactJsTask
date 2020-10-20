import React , { Suspense}from 'react';
import ReactDom from 'react-dom';
import {Provider} from 'react-redux';
import {createStore , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';


import App from './components/App';
import reducer from './reducers';
import './languageSetting/i18n';
import StartLoader from './components/UI/StartLoader';


const store =createStore(reducer, applyMiddleware(thunk));
ReactDom.render(
    <Provider store={store}>
        <Suspense fallback={(<StartLoader />)}>
        <App/>
        </Suspense>
    </Provider>,
    document.querySelector('#root')
);

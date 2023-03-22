import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/Redux-store";
import { Provider } from 'react-redux';

//export let rerenderEntireTree = () =>{

    ReactDOM.render(
        <Provider store={store}>
         <App />
        </Provider>
            , document.getElementById('root')
    );

//}
//rerenderEntireTree()
//store.subscribe(() => rerenderEntireTree())


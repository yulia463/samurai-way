import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/State";


export let rerenderEntireTree = () =>{

    ReactDOM.render(
         <App store={store}
              dispatch={store.dispatch.bind(store)}
           />,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(() => rerenderEntireTree())


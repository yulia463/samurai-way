import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./redux/Redux-store";
import  {Provider} from "./StoreContext";


export let rerenderEntireTree = () =>{

    ReactDOM.render(
        <Provider store={store}>
         <App />
         {/*<App store={store} dispatch={store.dispatch.bind(store)}/>*/}
        </Provider>
            ,
        document.getElementById('root')
    );
}

rerenderEntireTree()
store.subscribe(() => rerenderEntireTree())


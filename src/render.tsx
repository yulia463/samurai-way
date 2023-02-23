import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, state, upgradeNewPostText} from "./redux/State";

export let rerenderEntireTree = () =>{

    ReactDOM.render(
        <App state={state} addPost={() => addPost(state.profilePage.newPostText)} upgradeNewPostText={upgradeNewPostText}/>,
        document.getElementById('root')
    );
}



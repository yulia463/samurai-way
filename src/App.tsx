import React from 'react';
import './App.css';
import {NavBar} from "./components/Nav/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Header} from "./components/Header/Header";
import {
    ActionsTypes,
    DialogsDataType,
    MessagesDataType,
    PostDataType,
    StorePropsType,
    StoreType,
} from "./redux/State";

export type AppPropsType = {
    store:StorePropsType

    dispatch: (action: ActionsTypes) => void

}

function App (props:AppPropsType) {
    const state = props.store.getState()
    return (
        <BrowserRouter>

            <div className="App">
                <Header/>
                <div className={"navAndContent"}>
                    <NavBar/>

                    <div className={'content'}>
                        <Route path={"/dialogs"}
                               render={() => <Dialogs
                                   dialogsData={state.dialogPage.dialogsData}
                                   messagesData={state.dialogPage.messagesData}
                               />}/>
                        <Route path={"/profile"}
                               render={() => <Profile newPostText={state.profilePage.newPostText}
                                                      dispatch={props.dispatch}
                                                      profilePage={state.profilePage.posts}/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                    </div>
                </div>
            </div>

        </BrowserRouter>);
}

export default App;

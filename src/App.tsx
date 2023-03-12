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
import {dialogsReducer} from "./redux/DialogsReducer";
import {profileReducer} from "./redux/ProfileReducer";

export type AppPropsType = {
    store: any
    dispatch: (action: ActionsTypes) => void

}

function App(props: AppPropsType) {
    // console.log('props.', props.store.getState())
    const state = props.store.getState()
    return (
        <BrowserRouter>

            <div className="App">
                <Header/>
                <div className={"navAndContent"}>
                    <NavBar/>

                    <div className={'content'}>
                        <Route
                            path={"/dialogs"}
                            render={() => <Dialogs
                                dialogsData={state.dialogsReducer.dialogsData}
                                messagesData={state.dialogsReducer.messagesData}
                                newMessageBody={state.dialogsReducer.newMessageBody}
                                dispatch={props.dispatch}
                            />}/>
                        <Route path={"/profile"}
                               render={() => <Profile
                                   newPostText={state.profileReducer.newPostText}
                                   dispatch={props.dispatch}
                                   profilePage={state.profileReducer.posts}/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                    </div>
                </div>
            </div>

        </BrowserRouter>);
}

export default App;

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
import {DialogsDataType, MessagesDataType, PostDataType, StateType, upgradeNewPostText} from "./redux/State";

export type AppPropsType = {
    state: StateType
    addPost: () => void
    upgradeNewPostText: (newText: string) => void

}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>

            <div className="App">
                <Header/>
                <div className={"navAndContent"}>
                    <NavBar/>

                    <div className={'content'}>
                        <Route path={"/dialogs"}
                               render={() => <Dialogs
                                   dialogsData={props.state.dialogPage.dialogsData}
                                   messagesData={props.state.dialogPage.messagesData}
                               />}/>
                        <Route path={"/profile"}
                               render={() => <Profile newPostText={props.state.profilePage.newPostText}
                                                      upgradeNewPostText={props.upgradeNewPostText}
                                                      addPost={props.addPost}
                                                      profilePage={props.state.profilePage.posts}/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                    </div>
                </div>
            </div>

        </BrowserRouter>);
}

export default App;

import React from 'react';
import './App.css';
import {NavBar} from "./components/Nav/NavBar";
import {Profile} from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {Header} from "./components/Header/Header";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {Users} from "./components/Users/Users";
import UsersContainer from "./components/Users/UsersContainer";

export type AppPropsType = {
}

function App(props: AppPropsType) {
    return (
        <BrowserRouter>

            <div className="App">
                <Header/>
                <div className={"navAndContent"}>
                    <NavBar/>

                    <div className={'content'}>
                        <Route
                            path={"/dialogs"}
                            render={() => <DialogsContainer/>}/>
                        <Route path={"/profile"}
                               render={() => <Profile  />}
                        />
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                    </div>
                </div>
            </div>

        </BrowserRouter>);
}

export default App;

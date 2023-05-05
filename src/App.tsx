import React from 'react';
import './App.css';
import {NavBar} from "./components/Nav/NavBar";
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


function App() {
    return (
        <BrowserRouter>

            <div className="App">
                <HeaderContainer/>
                <div className={"navAndContent"}>

                    <NavBar/>
                    <div className={'content'}>
                        <Route
                            path={"/dialogs"}
                            render={() => <DialogsContainer/>}/>
                        {/*<Route path={'/'} render={() => <Redirect to={'/profile'} />}/>*/}
                        <Route path={"/profile/:userId?"}
                               render={() => <ProfileContainer/>}/>
                        <Route path={"/news"} render={() => <News/>}/>
                        <Route path={"/music"} render={() => <Music/>}/>
                        <Route path={"/settings"} render={() => <Settings/>}/>
                        <Route path={"/users"} render={() => <UsersContainer/>}/>
                        <Route path={"/login"} render={() => <Login/>}/>

                    </div>
                </div>
            </div>

        </BrowserRouter>);
}

export default App;

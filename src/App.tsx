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


function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Header/>
                <div className={"navAndContent"}>
                    <NavBar/>

                    <div className={'content'}>
                        <Route path={"/dialogs"} component={Dialogs}/>
                        <Route path={"/profile"} component={Profile}/>
                        <Route path={"/news"} component={News}/>
                        <Route path={"/music"} component={Music}/>
                        <Route path={"/settings"} component={Settings}/>

                    </div>
                </div>

            </div>
        </BrowserRouter>);
}

export default App;

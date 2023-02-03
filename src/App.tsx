import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Nav/NavBar";
import Profile from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";



function App() {
    return (
        <div className="App">
            <Header/>
            <div className={"navAndContent"}>
                <NavBar/>

                <div className={'content'}>
                    <Dialogs/>
                </div>

                {/*<Profile/>*/}
            </div>

        </div>
    );
}

export default App;

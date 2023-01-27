import React from 'react';
import './App.css';
import Header from "./components/Header";
import NavBar from "./components/Nav/NavBar";
import Profile from "./components/Profile/Profile";


function App() {
    return (
            <div className="App">
                <Header/>

                <div className={"navAndContent"}>
                    <NavBar/>
                    <Profile/>
                </div>

            </div>
    );
}

export default App;

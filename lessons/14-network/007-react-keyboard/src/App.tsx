import React, { useState } from 'react';
import './App.css';
import 'react-simple-keyboard/build/css/index.css';
import { List, InputConnected, KeyboardConnected } from "./components";



function App() {
    return (
        <div className="flex flex-col h-full">
            <div className="flex-none">
            <InputConnected />
            </div>
            <div className="flex-grow overflow-y-scroll">
              <List />
            </div>
            <div className="flex-none">
              <KeyboardConnected />
            </div>
        </div>
    );
}

export default App;



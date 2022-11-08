import React, {useState} from "react";
import './App.css'
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";

export default function App(){
    const [mode, setMode] = useState('')
    
    return <>
        <Header
        mode = {mode}
        setMode = {setMode}
        />
        <Main 
        mode = {mode}
        />
        <Footer/>
    </>
}
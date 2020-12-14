import React from 'react'
import './App.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Components/Home";
import CustomHeader from "./Components/Header";
import CustomFooter from "./Components/Footer";
import ThemaProg from "./Components/ThemaProg";
import Indicateur from "./Components/indicateur";
import Contact from "./Components/Contact";


function App() {

    return (
        <>
            <Router>
                <CustomHeader/>
                <Route path="/" exact component={Home}/>
                <Route path="/thematique" exact component={ThemaProg}/>
                <Route path="/indicateur" exact component={Indicateur}/>
                <Route path="/contact" exact component={Contact}/>
                <CustomFooter/>
            </Router>
        </>


    )
}

export default App

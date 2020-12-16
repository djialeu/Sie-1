import React from 'react'
import {Route} from 'react-router-dom'

import Home from "./Components/Home";
import ThemaProg from "./Components/ThemaProg";
import Indicateur from "./Components/indicateur";
import Contact from "./Components/Contact";
import ViewMachine from "./Components/viewMachine";

const BaseRouter = () => {
    return (
        <>
            <Route path="/" exact component={Home}/>
            <Route path="/thematique" exact component={ThemaProg}/>
            <Route path="/indicateur" exact component={Indicateur}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/machine" exact component={ViewMachine}/>
        </>
    )

};

export default BaseRouter
import React, {Fragment} from "react"
import {Route} from 'react-router-dom'

import Home from "./Components/Home";
import ThemaProg from "./Components/ThemaProg";


const BaseRouter = () => {
    <Fragment>
        <Route exact path='/' component={Home}/>
        <Route exact path='/thematique' component={ThemaProg}/>
    </Fragment>
};

export default BaseRouter
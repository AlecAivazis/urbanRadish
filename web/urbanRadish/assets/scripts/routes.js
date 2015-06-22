/*
Frontend router for urbanRadish.
*/

'use strict'

import React from 'react'
import {Route} from 'react-router'
import root_component from './components/root_component'
import lunchMenu from './views/lunchMenu'


let routes = (
    <Route handler={root_component}>
        <Route path="/lunch" handler={lunchMenu} />
    </Route>
)


export default routes


//// end of file ////
React
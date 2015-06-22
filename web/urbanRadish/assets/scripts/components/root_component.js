/*
Root level React component for urbanRadish.
*/

'use strict'

// third party imports
import React from 'react/addons'
import {RouteHandler} from 'react-router'


class root_component extends React.Component {
    // render the component
    render() {
        return (
            <div >
                <RouteHandler />
            </div>
        )
    }
}


export default root_component


//// end of file ////

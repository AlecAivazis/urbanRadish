
'use strict'

// third party imports
import React from 'react-native'
import LunchMenu from './menu/lunchMenu.js'


class UrbanRadishRoot extends React.Component {

    constructor() {
        // instantiate this
        super()
        // set the initial state
        this.state = {}
    }


    // render the component
    render() {
        return (
            <LunchMenu />
        )
    }
}


export default UrbanRadishRoot


// end of file

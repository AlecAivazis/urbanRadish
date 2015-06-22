
'use strict'

import {
    View, 
    Text,
    ScrollView,
} from 'react-native'
import LunchMenu from '../menu/lunchMenu.js'


class CategorySelect extends React.Component {

    constructor() {
        // instantiate this
        super()
        // set the initial state
        this.state = {}
        this.get_category_elements = this.get_category_elements.bind(this)
    }

    get_category_elements() {

    }

    // render the component
    render() {
        return (
            <ScrollView>
                <LunchMenu />
            </ScrollView>
        )
    }
}


CategorySelect.defaultProps = {}


CategorySelect.propTypes = {}


export default CategorySelect


// end of file

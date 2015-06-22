
'use strict'

// third party imports
import React from 'react/addons'
import StyleSheet from 'react-style'
import 'normalize.css'


class LunchMenu extends React.Component {


    // called when the component is first mounted
    componentDidMount() {}


    // called before the component is removed
    componentWillUnmount() {}


    // render the component
    render() {
        return (
            <div style={styles.root_style}>
                helloa
            </div>
        )
    }
}


LunchMenu.defaultProps = {}


LunchMenu.propTypes = {}


// styling
let styles = StyleSheet.create({
    root_style: {
    }
})


export default LunchMenu


// end of file

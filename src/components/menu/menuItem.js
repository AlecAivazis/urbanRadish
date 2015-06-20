
'use strict'

// third party imports
import {
    View,
    Text,
} from 'react-native'


class MenuItem extends React.Component {

    constructor() {
        // instantiate this
        super()
        // set the initial state
        this.state = {}
    }


    // called when the component is first mounted
    componentDidMount() {}


    // called before the component is removed
    componentWillUnmount() {}


    // render the component
    render() {
        return (
            <View>
                <Text>
                    {this.props.item.title}
                </Text>
            </View>
        )
    }
}


MenuItem.defaultProps = {}


MenuItem.propTypes = {}


export default MenuItem


// end of file

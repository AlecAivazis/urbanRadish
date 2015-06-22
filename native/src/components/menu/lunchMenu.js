'use strict'

// third party imports
import StyleSheet from 'react-style'
import MenuItem from './menuItem'
import {
    View, 
    Text,
    ListView,
} from 'react-native'


let menu = [
    {
        title: 'sandwhich',
        image: 'http://thumbs.dreamstime.com/x/large-turkey-sandwhich-20077936.jpg',
    }, {
        title: 'pizza',
        image: 'http://richthediabetic.com/wp-content/uploads/2013/07/Pizza.jpg',
    }

]

class LunchMenu extends React.Component {

    constructor(props) {
        // instantiate this
        super(props)
        // set the initial state
        this.state = {
            menuItems: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2, }),
        }
        this.loadMenuItems = this.loadMenuItems.bind(this)
        this.renderMenuItem = this.renderMenuItem.bind(this)
    }


    // called when the component is first mounted
    componentDidMount() {
        this.loadMenuItems()
    }


    // get today menu
    loadMenuItems() {
        this.setState({
            menuItems: this.state.menuItems.cloneWithRows(menu)
        })
    }


    // render a menu item
    renderMenuItem(item) {
        return (
            <MenuItem item={item} navigator={this.props.navigator} />
        )
    } 


    // render the component
    render() {
        return (
            <ListView
                dataSource={this.state.menuItems}
                renderRow={this.renderMenuItem} 
            />
        )
    }
}


export default LunchMenu


// end of file

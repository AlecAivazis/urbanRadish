
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
    }, {
        title: 'pizza',
    }

]

class UrbanRadishRoot extends React.Component {

    constructor() {
        // instantiate this
        super()
        // set the initial state
        this.state = {
            menuItems: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2,
            }),
        }
        this.loadMenuItems = this.loadMenuItems.bind(this)
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
            <MenuItem item={item}/>
        )
    } 


    // render the component
    render() {
        return (
            <ListView
                dataSource={this.state.menuItems}
                renderRow={this.renderMenuItem} 
                style={styles.container}/>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    }
})


export default UrbanRadishRoot


// end of file

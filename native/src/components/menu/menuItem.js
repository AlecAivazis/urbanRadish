
'use strict'

// third party imports
import StyleSheet from 'react-style'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'
import ItemDetail from './itemDetail'


class MenuItem extends React.Component {

    constructor(props) {
        // instantiate this
        super(props)
        // set the initial state
        this.state = {
            quantity: 0
        }
        this.show_item_detail = this.show_item_detail.bind(this)
        this.add_item_to_cart = this.add_item_to_cart.bind(this)
    }


    // increment the quantity of the item 
    show_item_detail() {
        console.log(this.props.navigator)
    }


    add_item_to_cart() {
        console.log('adding item to cart')
   }


    // render the component
    render() {
        let item = this.props.item
        return (
            <TouchableOpacity onPress={this.show_item_detail}>
                <View style={styles.menu_item} >
                    <Image
                        source={{uri: item.image}}
                        style={styles.preview}
                    />
                    <Text style={styles.description}>
                        {item.title}
                    </Text>
                    <TouchableOpacity onPress={this.add_item_to_cart}>
                        <Text style={styles.add_item_to_cart}> + </Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }
}


let styles = StyleSheet.create({
    menu_item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        height: 100,
        width: 100,
    },
    description: {
        flex: 1,
        textAlign: 'center',
    },
    add_item_to_cart:{
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        fontSize: 32,
    }
})


export default MenuItem


// end of file

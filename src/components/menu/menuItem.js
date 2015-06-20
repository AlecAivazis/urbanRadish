
'use strict'

// third party imports
import StyleSheet from 'react-style'
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native'


class MenuItem extends React.Component {

    constructor() {
        // instantiate this
        super()
        // set the initial state
        this.state = {
            quantity: 0
        }
        this.incrementQuantity = this.incrementQuantity.bind(this)
        this.show_detail = this.show_detail.bind(this)
    }


    // increment the quantity of the item 
    incrementQuantity() {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }
    

    show_detail() {
        this.setState({
            quantity: this.state.quantity + 3
        })
    }


    // render the component
    render() {
        let item = this.props.item
        return (
            <TouchableOpacity onPress={this.incrementQuantity}>
                <View style={styles.menu_item} >
                    <Image
                        source={{uri: item.image}}
                        style={styles.preview}
                    />
                    <Text style={styles.description}>
                        {item.title}
                    </Text>
                    <TouchableOpacity onPress={this.show_detail}>
                        <Text style={styles.quantity}> {this.state.quantity} </Text>
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
    quantity:{
        paddingLeft: 10,
        paddingRight: 10,
        textAlign: 'center',
        fontSize: 32,
    }
})


export default MenuItem


// end of file

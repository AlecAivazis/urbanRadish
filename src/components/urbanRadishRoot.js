
'use strict'

// third party imports
import { TabBarIOS, NavigatorIOS, View } from 'react-native'
import StyleSheet from 'react-style'
import LunchMenu from './menu/lunchMenu'


'use strict'

// third party imports
import React from 'react/addons'


class UrbanRadishRoot extends React.Component {
    // render the component
    render() {
        return (
            <NavigatorIOS 
                style={styles.container}
                initialRoute={{ 
                    title: 'Lunch Menu', 
                    component:LunchMenu 
                }} 
            />
        )
    }
}



let styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})


export default UrbanRadishRoot



// end of file

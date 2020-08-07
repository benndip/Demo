import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Selection, Settings } from '../screens'

const Drawer = createDrawerNavigator();

class Home extends React.Component {
    render() {
        return (
            <Drawer.Navigator initialRouteName="Selection">
                <Drawer.Screen name="Selection" component={Selection} />
                <Drawer.Screen name="Settings" component={Settings} />
            </Drawer.Navigator>
        );
    }
}

export default Home
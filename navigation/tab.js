import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import Feed from '../screens/feed';
import Create from '../screens/createpost';

let BTN = createBottomTabNavigator();

const Bottom = () => {
    return (
        <BTN.Navigator>
          <BTN.Screen name={'Feed'} component={Feed} />
          <BTN.Screen name={'Create'} component={Create} />
        </BTN.Navigator>
    );
}

export default Bottom
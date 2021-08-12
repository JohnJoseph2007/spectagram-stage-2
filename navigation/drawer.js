import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Bottom from './tab';
import Profile from '../screens/profile'

const DrawerNavigator = createDrawerNavigator();

const Drawer = ()=> {
    return(
      <DrawerNavigator.Navigator>
        <DrawerNavigator.Screen
          name={"Home"} component={Bottom}
        />
        <DrawerNavigator.Screen
          name={"Profile"} component={Profile}
        />
      </DrawerNavigator.Navigator>
    )
}

export default Drawer
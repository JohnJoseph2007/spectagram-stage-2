import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native'

import Drawer from './navigation/drawer'

export default function App() {
  return (
      <NavigationContainer>
        <Drawer/>
      </NavigationContainer>
  );
}

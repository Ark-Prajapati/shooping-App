
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Details from './screens/Details'

export type RootStackParamList = {
  Home: undefined;
  Details: {product: Product}
};

const Stack = createNativeStackNavigator<RootStackParamList>()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: "The Wheel of Time Book Series"
        }}
        />
        <Stack.Screen
        name='Details'
        component={Details}
        options={{
          title: "Product information"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
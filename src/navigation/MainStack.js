import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabHomeNavigator from './TabHomeNavigator'
import DetailScreen from '../Screen/DetailScreen'

const MainStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='TabHome' component={TabHomeNavigator} />
            <Stack.Screen name='DetailScreen' component={DetailScreen} />
        </Stack.Navigator>
    )
}

export default MainStack
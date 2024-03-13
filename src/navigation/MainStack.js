import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import CategoriesScreen from '../Screen/CategoriesScreen'
import DetailScreen from '../Screen/DetailScreen'
import TabHomeNavigator from './TabHomeNavigator'

const MainStack = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='TabHome' component={TabHomeNavigator} />
            <Stack.Screen name='DetailScreen' component={DetailScreen} />
            <Stack.Screen name='CategoryScreen' component={CategoriesScreen} />
        </Stack.Navigator>
    )
}

export default MainStack
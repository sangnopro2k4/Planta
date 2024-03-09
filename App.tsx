import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StatusBar, View } from 'react-native'
import { globalStyles } from './src/contants'
import AuthenStack from './src/navigation/AuthenStack'
import MainStack from './src/navigation/MainStack'
import { HomeScreen } from './src/Screen'
import DetailScreen from './src/Screen/DetailScreen'

const App = () => {
  return (
    <View style={globalStyles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor='transparent' translucent />
      <NavigationContainer>
        {/* <AuthenStack /> */}
        <MainStack />
      </NavigationContainer>
    </View>
  )
}

export default App


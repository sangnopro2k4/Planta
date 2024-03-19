import { View, Text, StatusBar } from 'react-native'
import React, { useContext } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthenStack from './navigation/AuthenStack'
import MainStack from './navigation/MainStack'
import { globalStyles } from './contants'
import { MyContext } from './Component/MyProvider'

const Main = () => {
    const { isLogin } = useContext(MyContext)
    return (
        <View style={globalStyles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor="transparent"
                translucent
            />
            <NavigationContainer>
                {isLogin ? <MainStack /> : <AuthenStack />}
            </NavigationContainer>
        </View>
    )
}

export default Main
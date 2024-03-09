import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Notification } from 'iconsax-react-native';
import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import { HomeScreen, NotificationScreen, SearchScreen, SettingScreen } from '../Screen';
import { appColors } from '../contants';
const Tab = createBottomTabNavigator();

const TabHomeNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'HomeScreen':
              return (
                <View style={{ alignItems: 'center' }}>
                  <Icon name="home" size={24} color={appColors.black} />
                  {focused && <Octicons name="dot-fill" size={5} color={appColors.black} />}
                </View>
              )
            case 'SearchScreen':
              return (
                <View style={{ alignItems: 'center' }}>
                  <Icon name="search" size={24} color={appColors.black} />
                  {focused && <Octicons name="dot-fill" size={5} color={appColors.black} />}
                </View>
              )
            case 'NotificationScreen':
              return (
                <View style={{ alignItems: 'center' }}>
                  <Notification size={24} color={appColors.black} />
                  {focused && <Octicons name="dot-fill" size={5} color={appColors.black} />}
                </View>
              )
            case 'SettingScreen':
              return (
                <View style={{ alignItems: 'center' }}>
                  <Octicons name="person" size={24} color={appColors.black} />
                  {focused && <Octicons name="dot-fill" size={5} color={appColors.black} />}
                </View>
              )
          }
        },
        tabBarShowLabel: false,
        headerShown: false
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="NotificationScreen" component={NotificationScreen} />
      <Tab.Screen name="SettingScreen" component={SettingScreen} />
    </Tab.Navigator>
  )
}

export default TabHomeNavigator

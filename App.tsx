import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {StatusBar, View} from 'react-native';
import {globalStyles} from './src/contants';
import AuthenStack from './src/navigation/AuthenStack';
import MainStack from './src/navigation/MainStack';

// const data = [
//   {
//     address: 'HCM',
//     time: '11:00',
//   },
//   {
//     address: 'HN',
//     time: '12:00',
//   },
//   {
//     address: 'HP',
//     time: '13:00',
//   },
//   {
//     address: 'CT',
//     time: '00:00',
//   },
//   {
//     address: 'CT',
//     time: '00:00',
//   },
//   {
//     address: 'CT',
//     time: '00:00',
//   },
// ];

const App = () => {
  return (
    <View style={globalStyles.container}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor="transparent"
        translucent
      />
      <NavigationContainer>
        <MainStack />
        {/* <AuthenStack /> */}
      </NavigationContainer>
    </View>
  );
};

export default App;

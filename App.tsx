import React from 'react';
import MyProvider from './src/Component/MyProvider';
import Main from './src/Main';
import PaymentScreen from './src/Screen/PaymentScreen';
import {globalStyles} from './src/contants';
import {StatusBar, View} from 'react-native';
import {SearchScreen} from './src/Screen';
import ProfileScreen from './src/Screen/ProfileScreen';
import EditProfile from './src/Screen/EditProfile';
import HandBookScreen from './src/Screen/HandBookScreen';

const App = () => {
  return (
    // <MyProvider>
    //   <Main />
    // </MyProvider>
    <View style={globalStyles.container}>
      <StatusBar translucent />
      <HandBookScreen />
    </View>
  );
};

export default App;

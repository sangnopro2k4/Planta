import React from 'react';
import MyProvider from './src/Component/MyProvider';
import Main from './src/Main';

const App = () => {
  return (
    <MyProvider>
      <Main />
    </MyProvider>
  );
};

export default App;

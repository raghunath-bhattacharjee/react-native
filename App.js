import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeTab from './components/Home/HomeTab';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeTab,
  }
},{
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
  }
});

export default App;

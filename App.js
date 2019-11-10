import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomePage from './components/Home/HomePage';

const App = createStackNavigator({
  HomeScreen: {
    screen: HomePage,
  }
},{
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
  }
});

export default App;

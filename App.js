import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomePage from './components/HomePage';
import SearchTabNavigator from './components/SearchTabNavigator';

// import * as firebase from 'firebase';
// const firebaseConfig = {
//   apiKey: "AIzaSyAaCxGSoQHobRqYHMTLjOgO72SM-8V1VfY",
//   authDomain: "react-firebase-12.firebaseapp.com",
//   databaseURL: "https://react-firebase-12.firebaseio.com",
//   projectId: "react-firebase-12",
//   storageBucket: "react-firebase-12.appspot.com",
//   messagingSenderId: "421778096881",
// };
// firebase.initializeApp(firebaseConfig);

const App = createStackNavigator({
  HomeScreen: {
    screen: HomePage,
  },
  SearchTabNavigator: {
    screen: SearchTabNavigator
  }
},{
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
  }
});

export default App;
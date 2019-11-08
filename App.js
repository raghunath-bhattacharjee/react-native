import React from 'react';
import {createStackNavigator} from 'react-navigation';
import HomeTab from './components/Home/HomeTab';

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
    screen: HomeTab,
  }
},{
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
  }
});

export default App;
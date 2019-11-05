import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createStackNavigator} from 'react-navigation';

import Explore from './screens/Explore';
import Saved from './screens/Saved';
import Trips from './screens/Trips';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile'

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './components/HomeScreen';
import SearchTabNavigator from './components/SearchTabNavigator';

import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAaCxGSoQHobRqYHMTLjOgO72SM-8V1VfY",
  authDomain: "react-firebase-12.firebaseapp.com",
  databaseURL: "https://react-firebase-12.firebaseio.com",
  projectId: "react-firebase-12",
  storageBucket: "react-firebase-12.appspot.com",
  messagingSenderId: "421778096881",
};

firebase.initializeApp(firebaseConfig);

const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen,
  },
  SearchTabNavigator: {
    screen: SearchTabNavigator
  }
  // Explore:{
  //   screen:Explore,
  //   navigationOptions:{
  //     tabBarLabel: 'EXPLORE',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-book" color={tintColor} size={24}></Icon>
  //     )
  //   }
  // },
  // Saved:{
  //   screen:Saved,
  //   navigationOptions:{
  //     tabBarLabel: 'SAVED',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-save" color={tintColor} size={24}></Icon>
  //     )
  //   }
  // },
  // Trips:{
  //   screen:Trips,
  //   navigationOptions:{
  //     tabBarLabel: 'TRIPS',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-mall" color={tintColor} size={24}></Icon>
  //     )
  //   }
  // },
  // Inbox:{
  //   screen:Inbox,
  //   navigationOptions:{
  //     tabBarLabel: 'INBOX',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-bag" color={tintColor} size={24}></Icon>
  //     )
  //   }
  // },
  // Profile:{
  //   screen:Profile,
  //   navigationOptions:{
  //     tabBarLabel: 'PROFILE',
  //     tabBarIcon: ({ tintColor }) => (
  //       <Icon name="ios-person" color={tintColor} size={24}></Icon>
  //     )
  //   }
  // }
},{
  tabBarOptions:{
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
  }
});

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
});
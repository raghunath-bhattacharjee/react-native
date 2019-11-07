import React,{ Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabNavigator } from 'react-navigation';
import { Footer, Footertab, Button, Icon } from 'native-base';
import HomeScreen from '../screens/HomeScreenBody';

const SearchTabNavigator = TabNavigator({
    Search:{
        screen: HomeScreen
    }
},{
    tabBarPosition: 'bottom',
    tabBarComponents:props => {
        return(
            <Footer>
                <Footertab>
                    <Button vertical onPress = { () => props.navigation.navigate('SearchTabNavigator')}>
                        <Text>Search</Text>
                    </Button>
                </Footertab>
            </Footer>
        )
    }
},{
    tabBarOptions: {
        activeTintColor: '#e91e63',
        labelStyle: {
          fontSize: 12,
        },
        style: {
          backgroundColor: 'blue',
        },
    }
});

export default  SearchTabNavigator;
import React,{ Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TabNavigator } from 'react-navigation';
import SearchTab from '../Search/SearchTab';
import { Footer, Footertab, Button, Icon } from 'native-base';
import HomeScreen from '../screens/HomeScreenBody';

const SearchTabNavigator = TabNavigator({
    HomeScreen:{
        screen: HomeScreen
    },
    SearchTab: {
        screen: SearchTab
    }
},{
    tabBarPosition: 'bottom',
    tabBarComponents:props => {
        return(
            <Footer>
                <Footertab>
                    <Button vertical  onPress = { () => props.navigation.navigate('HomeScreen')}>
                        <Text>HomeScreen</Text>
                    </Button>

                    <Button vertical onPress = { () => props.navigation.navigate('SearchTab') }>
                        <Text>SearchTab</Text>
                    </Button>
                </Footertab>
            </Footer>
        )
    }
});

export default  SearchTabNavigator;
import React,{ Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { TabNavigator } from 'react-navigation';

import SearchTab from './TabNavigator/SearchTab';
import FavouritsTab from './TabNavigator/FavouritsTab';

import { Footer, Footertab, Button, Icon } from 'native-base';


const SearchTabNavigator = TabNavigator({
    SearchTab:{
        screen: SearchTab
    },
    FavouritsTab:{
        screen: FavouritsTab
    }
},{
    tabBarPosition: 'bottom',
    tabBarComponents:props => {
        return(
            <Footer>
                <Footertab>
                    <Button 
                        vertical 
                        active = {props.navigationState.index === 0}
                        onPress = { () => props.navigation.navigate('SearchTab')}
                    >
                        <Icon name="beer" />
                        <Text>Search</Text>
                    </Button>

                    <Button 
                        vertical 
                        active = {props.navigationState.index === 1}
                        onPress = { () => props.navigation.navigate('FavouritsTab') }
                    >
                        <Icon name="star" />
                        <Text>Favourits</Text>
                    </Button>
                </Footertab>
            </Footer>
        )
    }
});

export default  SearchTabNavigator;
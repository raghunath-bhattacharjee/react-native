import React,{ Component } from "react";
import { View, Text , Icon} from "react-native";
import { createTabNavigator } from 'react-navigation';
import SearchTab from '../Search/SearchTab';
import { Footer, Footertab, Button } from 'native-base';
import HomeScreen from '../screens/HomeScreenBody';

export default createTabNavigator({
    Home:{
        screen: HomeScreen
    },
    Search: {
        screen: SearchTab
    }
},{
    tabBarPosition: 'bottom',
    tabBarComponents:props => {
        return(
            <Footer>
                <Footertab>
                    <Button vertical  onPress = { () => props.navigation.navigate('Home')}>
                        <Text>Home</Text>
                    </Button>

                    <Button vertical onPress = { () => props.navigation.navigate('Search') }>
                        <Text>Search</Text>
                    </Button>
                </Footertab>
            </Footer>
        )
    }
});
import React,{ Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {Button} from 'native-base';

import * as firebase from 'firebase';


class HomeScreen extends Component {

    static navigationOptions = {
        header: null
    }

    // componentDidMount(){
    //     firebase.auth().signInWithEmailAndPassword("raghunathbhattacharjee21@gmail.com","password");
    // }

    render(){
        return(
            <View style={styles.HomeScreenView}>
                <View style={styles.innerView}>
                    <Image source={require('../assets/home.jpg')}  style={styles.image}/>
                </View>
                <Button block={true} onPress={ () => this.props.navigation.navigate('SearchTabNavigator') }>
                    <Text style={{color: 'white'}}> Search product </Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    HomeScreenView: {
        flex:1,
        justifyContent: 'flex-end'
    },
    innerView: {
        position: "absolute",
        top:0,
        left:0,
        height:'100%',
        width:'100%'
    },
    image: {
        flex:1 ,
        height: null,
        width: null
    }
});
export default HomeScreen;
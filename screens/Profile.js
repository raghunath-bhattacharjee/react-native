import React,{ Component } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import Explore from './Explore'

class Profile extends Component {
    componentDidMount(){
        alert('comin soon');
    }
    render(){
        return(
            <View>
               <Explore />
            </View>
        )
    }
}

export default Profile;
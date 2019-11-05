import React,{ Component } from "react";
import {View,Text,StyleSheet,Image} from "react-native";

class Home extends Component {
    render(){
        return(
            <View style={{width: this.props.width/2 - 30, 
                height: this.props.width/2 - 30,
                borderWidth:0.5,
                borderColor:'grey'} }>
                <View style={{ flex:1 }}>
                    <Image source={this.props.imageUrl} style={styles.img} />
                </View>
                <View style={styles.viewContainer}>
                    <Text style={{ fontSize:15 }}>Name: {this.props.name} </Text>
                    <Text style={{ fontSize:12 }}>INR:{this.props.price} </Text>
                    <Text style={{ fontSize:12 }}>Date:{this.props.date} </Text>
                    <Text style={{ fontSize:10 }}>Author: Mr. Raghu</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    img:{
        height: null,
        width:null,
        flex:1, 
        resizeMode:'cover'
    },

    viewContainer: {
        flex:1,
        alignItems:'flex-start', 
        justifyContent: 'space-evenly', 
        paddingLeft:10
    }
});

export default Home;
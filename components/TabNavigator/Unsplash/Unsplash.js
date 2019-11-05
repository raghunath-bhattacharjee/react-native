import React,{ Component } from "react";
import {View,Text,StyleSheet,Image} from "react-native";

class Unsplash extends Component {

    resizeName(name){
        if(name.length > 30){
            name = name.substring(1, 30) + '...';
        }
        return name;
    }

    render(){
        return(
            <View style={{
                    width: this.props.width/2 - 30, 
                    height: this.props.width/2 - 30,
                    borderWidth:0.5,
                    borderColor:'grey'
                }}>
                <View style={{ flex:1 }}>
                    <Image source={{ uri:this.props.image }} style={styles.img} />
                </View>
                <View style={styles.viewContainer}>
                    <Text style={{ fontSize:15 }}>Name: {this.resizeName(this.props.name)} </Text>
                    <Text style={{ fontSize:12 }}>Likes: {this.props.likes} </Text>
                    <Text style={{ fontSize:12 }}>Created_at: {this.props.created_at} </Text>
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
        padding:10,
        marginBottom:10
    }
});

export default Unsplash;
import React,{ Component } from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import { Card, Right } from 'native-base';

class Home extends Component {
    render(){
        return(
            <Card>
                <View style={{width: this.props.width/2 - 30, 
                    height: this.props.width/2 - 30,
                    borderWidth:0.5,
                    borderColor:'grey'} }>
                    <View style={{ flex:1 }}>
                        <Image source={{ uri: this.props.imageUrl}} style={styles.img} />
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={{ fontSize:15 }}>Name: {this.props.name} </Text>
                        <Text style={{ fontSize:12 }}>Desc:{this.props.desc} </Text>
                    </View>
                </View>
            </Card>
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
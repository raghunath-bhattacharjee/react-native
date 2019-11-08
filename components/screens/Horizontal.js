import React,{ Component } from "react";
import { View,Text,StyleSheet,Image} from "react-native";

class Category extends Component {
    render(){
        return(
            <View style={styles.mainCOntainer}>
                <View style={{flex:2}}>
                    <Image source={{ uri:this.props.imageUrl }} style={styles.img}/>
                </View>
                <View style={styles.name}>
                    <Text> {this.props.name} </Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    mainCOntainer: {
        height:130, 
        width: 130, 
        marginLeft:20, 
        borderWidth:0.5,
        borderColor:'grey'
    },
    img: {
        flex:1 ,
        width:null, 
        height:null, 
        resizeMode: 'cover'
    },
    name:{
        flex:1, 
        paddingLeft: 10, 
        paddingTop: 10
    }
});

export default Category;
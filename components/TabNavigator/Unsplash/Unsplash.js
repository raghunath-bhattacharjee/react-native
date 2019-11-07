import React,{ Component } from "react";
import {View,Text,StyleSheet,Image} from "react-native";
import { Card } from 'native-base';

class Unsplash extends Component {

    resizeName(name){
        if(name.length > 30){
            name = name.substring(1, 30) + '...';
        }
        return name;
    }

    resizeDescription(desc){
        if(desc.length > 400){
            desc = desc.substring(1, 400) + '...';
        }
        return desc;
    }

    defaultDescription(){
        return(
            "I shot this while doing a job for a luxury automotive storage facility in Baltimore, MD. I wanted to create an ominous sense of intrigue, giving the feeling of a space that was both expansive and enclosed. I enjoy the journey my eyes take from the focal point of the headlamps to the contours of the Camero’s body, and then to the backdrop of stacked automobiles."
        );
    }

    render(){
        return(
            <Card>
                <View style={{ width: this.props.width - 30, height: this.props.width - 30,borderWidth:0.5,borderColor:'grey' }}>
                    <View style={{ flex:1 }}>
                        <Image source={{ uri:this.props.image }} style={styles.img} />
                    </View>
                    <View style={styles.viewContainer}>
                        <View style={styles.textLikeView}>
                            <Text style={{ fontSize:15 }}>
                                Name : { this.resizeName(this.props.name) } 
                            </Text>
                            <Text style={{ fontSize:15 , marginLeft: 19}}>Total Likes : {this.props.likes} </Text>
                        </View>
                        <Text style={{ fontSize:12 }}>
                            Description: { this.props.description ? this.resizeDescription(this.props.description) : this.defaultDescription() }
                        </Text>
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
        padding:10,
    },

    textLikeView: {
        flexDirection: 'row', 
        flexWrap:'wrap', 
        justifyContent: 'space-between'
    }
});

export default Unsplash;
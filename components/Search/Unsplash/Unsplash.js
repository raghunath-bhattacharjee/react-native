import React,{ Component } from "react";
import {View,Text,StyleSheet,Image, RNFetchBlob, PermissionsAndroid} from "react-native";
import { Card, Right } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

class Unsplash extends Component {

    resizeName(name){
        if(name.length > 10){
            name = name.substring(1, 20) + '...';
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

    download( url ){
        PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: "Storage",
              message: "This app would like to store some files on your phone"
            }
        ).then(() => {
            let dirs =`/storage/emulated/0/app/assets/`;
            RNFetchBlob.config({
                path: dirs + '/'+this.props.name+'.png',
                fileCache: true
            }).fetch("GET",url, {})
                .then(res => {
                    console.log("res.data============================", res.data);
                })
                .catch(err => {
                    console.log("Error ", err);
                });
            }
        )
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
                            <Right onPress={ () => this.download(this.props.image) } style={{fontSize:15,marginLeft:53}}>
                               <Text>Download : <Icon name="download" size={16} color="black" /></Text>
                            </Right>
                        </View>
                        <Text style={{ fontSize:12, paddingTop:9, paddingBottom:9 }}>
                            Description: { this.props.description ? this.resizeDescription(this.props.description) : this.defaultDescription() }
                        </Text>
                        <Text style={{ fontSize:15}}>Likes : {this.props.likes} </Text>
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
        padding:20,
    },

    textLikeView: {
        flexDirection: 'row', 
        flexWrap:'wrap', 
        justifyContent: 'space-between'
    }
});

export default Unsplash;
import React,{ Component } from "react";
import { View, Text, StyleSheet} from "react-native";
import { Button } from "native-base";

class TagView extends Component {

    CallMe(){
        alert("Coming Soon");
    }
    render(){
        return(
            <View style={ styles.mainContainer }>
                <Button style={{fontSize: 10, 
                            fontWeight:'700',
                            height:24,
                            padding:15,
                            backgroundColor: this.props.bgcolor
                        }} 
                        onPress={ () => this.CallMe() }>
                    <Text style={{color:'white', fontSize:12}}>{this.props.tag}</Text>
                </Button>
            </View> 
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        minHeight: 1,
        minWidth:40 , 
        padding:10, 
        borderColor: 'grey' , 
        borderWidth:0.2, 
        borderRadius:2, 
        marginRight:5
    },
});

export default TagView;
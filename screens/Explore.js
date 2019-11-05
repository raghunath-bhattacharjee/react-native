import React,{ Component } from "react";
import { View,Text,StyleSheet,SafeAreaView,TextInput,Platform,ScrollView,Image,Dimensions,Animated } from "react-native";
import { Icon, Button } from "native-base";

import Ctegory from './Components/Explore/Category';
import Home from './Components/Explore/Home';

const { width } = Dimensions.get('window');

class Explore extends Component {

    componentDidMount(){
    }

    constructor(props){
        super(props);

        this.allow = true;
    }

    CallMe(type){
        if(type == 1){
            this.allow = true;
        } else {
            this.allow = false;
        }
    }

    createHorizontalView(params){
        var HorizontalView = [];
        for(var i = 1; i <= params; i++){
            HorizontalView.push(
                <View key = {i}>
                    <Ctegory 
                        imageUrl={require('../assets/background.jpeg')} 
                        name={"Box View-"+i} 
                    />
			    </View>   
            );
        }
        return HorizontalView;
    }

    createListView(params) {
        var ListTabView = [];
        for(var i = 1; i <= params; i++){
            ListTabView.push(
                <View key = {i}>
                    <Home 
                        imageUrl={require('../assets/background.jpeg')} 
                        width={width} name={"ABC-"+i} 
                        price={1000+i} 
                        date={i+"/"+i+"/200"+i}
                    />
			    </View>   
            );
        }
        return ListTabView;
    }

    render(){
        return(
           <SafeAreaView style={{ flex: 1 }}>
               <View style={{ flex: 1 }}>
                   
                    <View style={styles.mainContainer }>
                        <View style={styles.mainContainer2}>
                            <Icon name="ios-search" size={10}  style={{marginRight:3}}/>
                            <TextInput placeholder="Hey, how can i help you..!" 
                                    style={{ flex:1 , fontWeight: '700', fontSize:14 }} 
                                    underlineColorAndroid="transparent"/>
                        </View>

                        <Animated.View style={ styles.animatedView }>
                            <View style={ styles.mainContainerTag }>
                                <Button style={{
                                            fontSize: 10, 
                                            fontWeight:'700',
                                            height:24,
                                            padding:15,
                                            backgroundColor: 'blue'
                                        }} 
                                        onPress={ () => this.CallMe(1) }>
                                    <Text style={{color:'white', fontSize:12}}>Add Component</Text>
                                </Button>
                            </View> 
                            <View style={ styles.mainContainerTag }>
                                <Button style={{
                                            fontSize: 10, 
                                            fontWeight:'700',
                                            height:24,
                                            padding:15,
                                            backgroundColor: 'red'
                                        }} 
                                        onPress={ () => this.CallMe(2) }>
                                    <Text style={{color:'white', fontSize:12}}>Delete Component</Text>
                                </Button>
                            </View> 
                        </Animated.View>
                    </View>

                    <ScrollView scrollEventThrottle={16}>
                        
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize:24, fontWeight: '700' ,paddingHorizontal: 20 }}>
                                Winter view of kolkata
                            </Text>    
                        </View>

                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                               { this.allow ? this.createHorizontalView(20) : null }
                            </ScrollView>
                        </View>

                        <View style={{ marginTop: 10, paddingHorizontal: 20 }}>
                            <Text style={{ fontSize:24, fontWeight:'700' }}>
                                Introdusing My Photo Gallery
                            </Text>
                            <Text style={{ fontWeight: '100' , marginTop:10}}>
                                It specifies whether the children are visible or not.   
                            </Text>
                            <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                <Image style={ styles.imagView}  source={require('../assets/background.jpeg')} />
                            </View>
                        </View>
                        
                        <View style={{marginTop:40}}>
                            <Text style={{ fontSize:24 , fontWeight: '700' , paddingHorizontal: 20}}>
                                Home around the world
                            </Text>
                            <View style={ styles.imageHorizontal }>
                                { this.allow ? this.createListView(100) : null}
                            </View>
                        </View>

                    </ScrollView>
               </View>
           </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 150, 
        backgroundColor: 'white',
        borderRadius:5, 
        borderBottomWidth: 1, 
        borderBottomColor: 'grey'
    },

    mainContainer2: {
        flexDirection: 'row', 
        padding: 14,
        marginTop: Platform.OS == 'android' ? 30 : null,
        elevation:5,
        borderBottomColor: 'grey'
    },

    mainContainerTag: {
        minHeight: 1,
        minWidth:40 , 
        padding:10, 
        borderColor: 'grey' , 
        borderWidth:0.2, 
        borderRadius:2, 
        marginRight:5
    },

    animatedView: { 
        flexDirection:'row', 
        marginHorizontal:5, 
        position: 'relative', 
        top: 2, 
        padding:10,
        alignItems:'center'
    },

    imagView: {
        flex:1, 
        height: null, 
        width:null, 
        resizeMode:'cover', 
        borderRadius:5, 
        marginBottom: 5, 
        borderWidth:1,
        borderColor: 'grey'
    },

    imageHorizontal:{ 
        paddingHorizontal:20, 
        marginTop:20 , 
        marginBottom:5, 
        flexDirection: 'row', 
        flexWrap:'wrap', 
        justifyContent: 'space-between'
    }
});

export default Explore;
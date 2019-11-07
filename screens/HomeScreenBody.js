import React,{ Component } from "react";
import { View, Text, StyleSheet, Dimensions, SafeAreaView, ScrollView , Image} from "react-native";
import axios from "axios";
import HorizontalView from './Horizontal';
import VerticalView from './Vertical';

const { width } = Dimensions.get('window');

class HomeScreen extends Component {
    state ={
        beerData: []
    }

    componentDidMount(){
        this.homeSCreenData();
    }

    homeSCreenData = () => {
        const query = `https://api.unsplash.com/search/photos/?client_id=c33a5ccd2f9f0e1b59437149c6281f2486724e8856130cfbe216104e3686ba2e&query=cars&page=1`;
        axios.get(query).then((responce) => {
            var data = responce.data ? responce.data.results : false;
        
            this.setState({beerData: data});
        });
    }


    populateView(viewType){
        var beerData = this.state.beerData;
        if (beerData.length > 0 && viewType == 1) {
            var LayoutHorizontal = beerData.map(function(beerData, index){
                return(
                    <View key = {index}>
                        <HorizontalView 
                            imageUrl={beerData.urls.regular} 
                            name={beerData.user.name} 
                        />
                    </View>   
                );
            });
            return LayoutHorizontal;
        } else if(viewType == 2){
            var LayoutHorizontal = beerData.map(function(beerData, index){
                return(
                    <View key = {index}>
                        <VerticalView 
                            imageUrl={beerData.urls.regular} 
                            name={beerData.user.name} 
                            desc={beerData.alt_description} 
                            width={width}
                        />
                    </View>   
                );
            });
            return LayoutHorizontal;
        } else {
            return(
                <View>
                    <Text style={{marginLeft:'20%'}}> waiting... </Text>
                </View>
            )
        }
    }

    render(){
        return(
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <ScrollView scrollEventThrottle={16}>
                        <View style={{ height: 130, marginTop: 20 }}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                { this.populateView(1) }
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
                            <View style={styles.HorizontalView}>
                                { this.populateView(2) }
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
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
    HorizontalView:{
        paddingHorizontal:20, 
        marginTop:20 , 
        marginBottom:5, 
        flexDirection: 'row', 
        flexWrap:'wrap', 
        justifyContent: 'space-between'
    }
});
export default HomeScreen;
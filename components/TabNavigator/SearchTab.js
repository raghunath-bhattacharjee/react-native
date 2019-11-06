import React,{ Component } from "react";
import { View, Text, StyleSheet , Keyboard, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import { Container, Content, Button } from 'native-base';


const { width } = Dimensions.get('window');
import SearchHeader from './SearchHeader';
import axios from "axios";

import SearchBody from './SearchBody';

import Unsplash from './Unsplash/Unsplash';

class SearchTab extends Component {
    static navigationOptions = {
        header: null
    }

    state ={
        searchBeer: '',
        beerData: null,
        beerFound: false,
        page: 0
    }

    unSplashSearch = () => {
        Keyboard.dismiss();
        const beerName = this.state.searchBeer;
        const query = `https://api.unsplash.com/search/photos/?client_id=c33a5ccd2f9f0e1b59437149c6281f2486724e8856130cfbe216104e3686ba2e&query=`+beerName+'&page='+this.state.page;
        
        axios.get(query).then((responce) => {
            
            var data = responce.data ? responce.data.results : false;
            
            if(data){
                this.setState({
                    beerData: [...data],
                    beerFound: true
                });
            }
        }).catch((error) => {
            this.setState({
                beerFound: false,
                beerData: null,
            });
        });
    }

    renderContent = () =>{
        if (this.state.beerFound && this.state.beerData.length > 0) {
            console.log(this.state.beerData.length);
            var HorizontalView = this.state.beerData.map(function(beerData, index){
                return(
                    <View key = {index}>
                        <Unsplash 
                            width={width}
                            id={beerData.id} 
                            name={beerData.user.first_name} 
                            likes={beerData.likes} 
                            image={beerData.regular} 
                            description={beerData.description} 
                        />
                    </View> 
                );
            });

            return HorizontalView;
        } else {
            return (
                <View style={{flex:1, height:400,width:400,marginTop:150}}>
                    <Text style={{textAlign: 'center'}}> Nothing Found </Text> 
                </View>
            );
        }
    }

    textChange(event){
        const {eventCount, target, text} = event.nativeEvent;
        this.setState({searchBeer: text});
    }

    scrollToEnd(){
        this.state.page +=1;
        this.renderContent();
    }

    render(){
        return(
            <Container>
                <SearchHeader  
                    value= { this.state.searchBeer } 
                    onChangeText = { (event) => this.textChange(event) }
                    beerSearch = {this.unSplashSearch}
                />
                <Content>
                    <View style={ styles.mainContainer }>
                        { this.renderContent()  }   
                    </View>
                    <View>
                    <Button block={true} onPress={ () => this.scrollToEnd() }>
                        <Text style={{color: 'white'}}> Load more... </Text>
                    </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    mainContainer: { 
        marginTop:20 , 
        marginBottom:8, 
        flexDirection: 'row', 
        flexWrap:'wrap', 
        justifyContent: 'center',
        padding:0,
        margin:0
    }
});

export default SearchTab;
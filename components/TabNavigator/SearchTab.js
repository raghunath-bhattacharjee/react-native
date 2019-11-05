import React,{ Component } from "react";
import { View, Text, StyleSheet , Keyboard, Dimensions } from "react-native";
import { Container, Content } from 'native-base';


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
        beerFound: false
    }

    // beerSearch = () => {
    //     Keyboard.dismiss();
    //     const beerName = this.state.searchBeer;
    //     console.log(this.state.searchBeer);

    //     const query = `https://api.brewerydb.com/v2/search?q=`+ beerName +`&type=beer&key=a78ac36adc8cce0e2e41edea49958889`;
        
    //     axios.get(query).then((responce) => {
    //         var data = responce.data.data ? responce.data.data : false;
    //         if(data){
    //             this.setState({
    //                 beerData: data,
    //                 beerFound: true
    //             });
    //         }
    //     }).catch((error) => {
    //         this.setState({
    //             beerFound: false,
    //             beerData: null
    //         }) 
    //     });
    // }

    unSplashSearch = () => {
        Keyboard.dismiss();
        const beerName = this.state.searchBeer;
        const query = `https://api.unsplash.com/search/photos/?client_id=c33a5ccd2f9f0e1b59437149c6281f2486724e8856130cfbe216104e3686ba2e&query=`+beerName;
        
        axios.get(query).then((responce) => {
            var data = responce.data ? responce.data.results : false;
            if(data){
                this.setState({
                    beerData: data,
                    beerFound: true
                });
            }
        }).catch((error) => {
            this.setState({
                beerFound: false,
                beerData: null
            }) 
        });
    }

    onPress (event){
        console.log(event);
    }

    renderContent = () =>{
        var HorizontalView = [];
        if (this.state.beerFound && this.state.beerData.length > 0) {
            for( var i=0 ; i<this.state.beerData.length; i++){
                HorizontalView.push(
                    <View key = {i}>
                        <Unsplash
                            width={width}
                            id={this.state.beerData[i].id} 
                            name={this.state.beerData[i].user.first_name} 
                            likes={this.state.beerData[i].likes} 
                            image={this.state.beerData[i].urls.thumb} 
                            created_at={this.state.beerData[i].created_at} 
                            onPress = { (event) => this.onPress(event) }
                        />
                    </View>
                );
            }
            return HorizontalView;
        } else {
            console.log("beer not found.");
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

    render(){
        return(
            <Container>
                <SearchHeader  
                    value= { this.state.searchBeer } 
                    onChangeText = { (event) => this.textChange(event) }
                    beerSearch = {this.unSplashSearch}
                />
                <Content>
                    <View style={ styles.imageHorizontal }>
                        { this.renderContent()  }
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    imageHorizontal: {
        paddingHorizontal:20, 
        marginTop:20 , 
        marginBottom:5, 
        flexDirection: 'row', 
        flexWrap:'wrap', 
        justifyContent: 'space-between'
    }
});

export default SearchTab;
import React,{ Component } from "react";
import { View, Text, StyleSheet , Keyboard, Dimensions ,ActivityIndicator } from "react-native";
import { Container, Content, Button } from 'native-base';
import SearchHeader from './SearchHeader';
import axios from "axios";
import Unsplash from './Unsplash/Unsplash';

const { width } = Dimensions.get('window');

class SearchTab extends Component {
    state ={
        searchBeer: '',
        beerData: null,
        beerFound: false,
        page: 1,
        showLoadMoreBtn: false,
        isProgressButton: false,
        isProgressHome: false
    }

    unSplashSearch = () => {

        this.setState({isProgressHome: true});

        Keyboard.dismiss();
        const beerName = this.state.searchBeer;
        const query = `https://api.unsplash.com/search/photos/?client_id=c33a5ccd2f9f0e1b59437149c6281f2486724e8856130cfbe216104e3686ba2e&query=`+beerName+'&page='+this.state.page;
        this.callApi(query);
    }

    callApi(query){
        axios.get(query).then((responce) => {
            if (responce.data.total_pages > 1) {
                this.setState({showLoadMoreBtn: true});
            } else {
                this.setState({showLoadMoreBtn: false});
            }
            
            this.setState({isProgressHome: false, isProgressButton: false});


            var data = responce.data ? responce.data.results : false;
            this.populateData(data);
        }).catch((error) => {
            this.resetSatetData();
        });
    }

    populateData(data){
        if(data && data.length > 0){
            if (this.state.beerData) {
                data = [...this.state.beerData,...data];
            }
            this.setState({
                beerData: data,
                beerFound: true
            });
        } else {
            this.resetSatetData();
        }
    }

    resetSatetData(){
        this.setState({
            searchBeer: '',
            beerData: null,
            beerFound: false,
            page: 1
        });
    }

    renderContent = () =>{
        if (this.state.beerFound && this.state.beerData.length > 0) {
            var HorizontalView = this.state.beerData.map(function(beerData, index){
                return(
                    <View key = {index}>
                        <Unsplash 
                            width={width}
                            id={beerData.id} 
                            name={beerData.user.first_name} 
                            likes={beerData.likes} 
                            image={beerData.urls.regular} 
                            description={beerData.description} 
                        />
                    </View> 
                );
            });

            return HorizontalView;
        } else {
            return (
                <View style={{flex:1,marginTop:150}}>
                    { 
                        this.state.isProgressHome ? 
                        <ActivityIndicator size="large" color="#0000ff" /> 
                        : 
                        <Text style={{textAlign: 'center'}}> Nothing Found </Text>
                    } 
                </View>
            );
        }
    }

    textChange(event){
        const { text} = event.nativeEvent;
        if (this.state.beerName != text) {
            this.resetSatetData();
        }
        this.setState({searchBeer: text});
    }

    loadMore(){
        this.state.page +=1;
        this.unSplashSearch();
        this.setState({isProgressButton: true});
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

                    {
                        this.state.showLoadMoreBtn && this.state.beerFound ?  
                            <Button block={true} onPress={ () => this.loadMore() }  style={{ backgroundColor:'#03a9f4' }}>
                                { this.state.isProgressButton ? <ActivityIndicator size="large" color="white" /> : null}
                                <Text style={{color: 'white'}}> Load More... </Text>
                            </Button>
                        :
                        null
                    }
                    
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
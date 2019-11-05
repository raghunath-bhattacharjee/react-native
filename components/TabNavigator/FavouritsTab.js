import React,{ Component } from "react";
import { View, Text, StyleSheet, ListView } from "react-native";

import * as firebase from 'firebase';

var data =[];
var currentUser;

import {Container, Content, ListItem} from 'native-base';
class FavouritsTab extends Component {

    componentDidMount(){
        this.getFavourites();
    }


    constructor(props){
        super(props);

        this.ds = new ListView.DataSource({
            rowHasChanged:(r1,r2) => r1 != r2
        })

        this.state = {
            ListView: data
        }
    }

    getFavourites = async () => {
        currentUser = await firebase.auth().currentUser   

        var that = this;

        firebase.database.ref(currentUser.uid).child('favourites').on('child_added', function(data){
            var newData = [...that.ListView];
            newData.push(data);
            console.log(newData);

            TouchList.setState({ListView: newData});
        })
    }

    render(){
        return(
            <Container style={{flex:1, backgroundColor:'white'}}>
                <Content>
                    <ListView
                        enableEmptySections
                        dataSource={this.ds.cloneWithRows(this.state.ListView)}

                        renderRow = { data => 
                            <ListItem>
                                <Text> data.val().name </Text>
                            </ListItem>
                        }
                    >

                    </ListView>
                </Content>
            </Container>
        )
    }
}

export default FavouritsTab;
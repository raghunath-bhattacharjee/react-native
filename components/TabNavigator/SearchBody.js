import React,{ Component } from "react";
import { View, Text, StyleSheet , Button} from "react-native";

import { Content, ListItem, List, Image } from 'native-base';

import * as firebase from 'firebase';

var currentUser;

class SearchBody extends Component {

    addFaboutes = async (beerName) => {
        //get auth user
        currentUser = await firebase.auth().currentUser

        //get a unique key
        var databaseRef  = await firebase.database().ref(currentUser.uid).child('favourites').push();

        //update the beer name at the unique key
        databaseRef.set({
            'name': beerName
        })
    }

    resizeName(name){
        if(name.length > 30){
            name = name.substring(1, 30) + '...';
        }
        return name;
    }

    render(){

        const beerData = this.props.beerData;

        return(
            <Content>
                <List style={{ backgroundColor: 'white' }}>
                    <ListItem >
                        <Text>  </Text>
                    </ListItem>
                    <ListItem style={{backgroundColor:'yellow'}}>
                        <Text style={{textAlign:'center',marginLeft:20}}>Item Number: {beerData.id}</Text>
                    </ListItem>
                    <ListItem >
                        <Text>  </Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Name </Text>
                    </ListItem>
                    <ListItem style={{ flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text>{ this.resizeName(beerData.name) }</Text>
                        </View>
                        <View>
                            <Button onPress={ () => this.addFaboutes(beerData.name)} title="Favourites">
                            </Button>
                        </View>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Category</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{ beerData.style.category.name }</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Date</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.style.category.createDate}</Text>
                    </ListItem>
                    
                    <ListItem itemDivider>
                        <Text>Description</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.style.description}</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Rating</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.style.abvMax ? beerData.style.abvMax : 0}</Text>
                    </ListItem>

                    <ListItem itemDivider>
                        <Text>Is it organic</Text>
                    </ListItem>
                    <ListItem >
                        <Text>{beerData.isOrganic == 'Y' ? 'Yes' : 'No'}</Text>
                    </ListItem>
                </List>
            </Content>
        )
    }
}

export default SearchBody;
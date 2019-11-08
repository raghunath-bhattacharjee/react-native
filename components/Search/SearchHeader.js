import React,{ Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Header, Item, Icon, Input} from 'native-base';

class SearchHeader extends Component {
    render(){
        return(
            <Header searchBar rounded style={{ height: 80, backgroundColor:'#2F9FD3'}}>
                <Item>
                    <Icon name="ios-search" />
                    <Input
                        placeholder="Please type a keyword "
                        returnKeyType="search"
                        onChange={this.props.onChangeText}
                        onSubmitEditing={this.props.beerSearch}
                    />
                </Item>
            </Header>
        )
    }
}

export default SearchHeader;
/* eslint-disable prettier/prettier */

import React, { Component } from "react";
import {FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Left, Right, Body, Text, Container, Content, View } from "native-base";
import SearchBar from 'react-native-search-bar';
import Icon from "react-native-vector-icons/Feather";

import mockData from '../../data/mockData';
import LibraryList from './Components/LibraryList';

class Library extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: null,
      searchedItems: [],
    };
  }
    search = (searchText) => {
        if (searchText.length > 2){
          // this.setState({searchText});
          let searchedItems = [];
          const searchTextLowerCase = (searchText || "").toLowerCase();
        
          mockData.map((item,i)=>{
            if ( item.name && item.name.toLowerCase().includes(searchTextLowerCase)
                  || item.status && item.status.toLowerCase().includes(searchTextLowerCase) ){
              searchedItems.push(item);
            }
          });

          // searchedItems = searchedItems.sort((obj1, obj2) => obj1["name"] < obj2["name"] ? -1 : 1)
          
          this.setState({
            searchedItems: searchedItems,
            searchText: searchText
          });
        } else {
          this.setState({
            searchedItems : [],
            searchText: ''
          });
        }
    }

    renderItem = ({ item, index }) => {
        return (
          <View style={{backgroundColor: "transparent"}}>
            <LibraryList
              item={item}
              onPress={()=>{
                this.props.navigation.navigate("LibraryDetails", {
                  selectedLibrary: item,
                  index
                })
              }}
            />
          </View>
        );
      };

    render(){

      let data = mockData.sort((obj1, obj2) => obj1["name"] < obj2["name"] ? -1 : 1)
        return(
           <Container>
               <Header style={styles.header}>
                   <Left>
                      <Text style={styles.title}>Dictionary📖</Text>
                   </Left>
                   <Right>
                     <Icon name="search" style={styles.icon} />
                   </Right>
               </Header>
               <Content>
               <SearchBar
                ref="searchBar"
                placeholder="Search"
                onChangeText={(value) => { this.search(value) }}
                // onSearchButtonPress={...}
                // onCancelButtonPress={...}
                />
                <FlatList
                  data={this.state.searchText && this.state.searchText.length > 2 ? this.state.searchedItems : data}
                  renderItem={this.renderItem}
                  keyExtractor={data => data.code}
                />
               </Content>
           </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "white",
        borderBottomWidth: 0
    },
    title: {
        fontSize: 25,
        marginLeft: 25,
        fontWeight: "bold"
    },
    searchBar: {

    },
    icon:{
      fontSize: 25,
      marginRight: 20,
      // marginTop: 10
    }
})

export default Library;
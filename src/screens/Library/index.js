/* eslint-disable prettier/prettier */

import React, { Component } from "react";
import {FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Header, Left, Right, Body, Text, Container, Content, View } from "native-base";
import SearchBar from 'react-native-search-bar';
import Icon from "react-native-vector-icons/Feather";

import mockData from '../../data/mockData';
import LibraryList from './Components/LibraryList';

class Library extends Component {

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
        return(
           <Container>
               <Header style={styles.header}>
                   <Left>
                      <Text style={styles.title}>Library</Text>
                   </Left>
               </Header>
               <Content>
               <SearchBar
                ref="searchBar"
                placeholder="Search"
                //   onChangeText={...}
                //   onSearchButtonPress={...}
                //   onCancelButtonPress={...}
                />
                <FlatList
                  data={mockData}
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
        fontSize: 30,
        paddingLeft: 20,
        fontWeight: "bold"
    },
    searchBar: {

    },
    // icon:{
    //   fontSize: 30,
    // }
})

export default Library;
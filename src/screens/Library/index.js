/* eslint-disable prettier/prettier */

import React, { Component } from "react";
import { Animated, FlatList, StyleSheet, TouchableOpacity, Platform } from "react-native";
import { Header, Left, Right, Body, Text, Container, Content, View, Button } from "native-base";
import SearchBar from 'react-native-search-bar';
import Icon from "react-native-vector-icons/Feather";
import { isIphoneX } from "react-native-iphone-x-helper";

import mockData from '../../data/mockData';
import LibraryList from './Components/LibraryList';

class Library extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: null,
      searchedItems: [],
      boxAnimation: new Animated.Value(0),
      boxSize: 50,
      allActive: true,
      safeActive: false,
      warningActive: false,
      hazardActive: false
    };
  }

  pressAll = (boxAnimation) => {
    Animated.timing(boxAnimation, {
      toValue: 0,
      duration: 500
    }).start();
    this.setState({ 
      allActive: true,  
      safeActive: false,
      warningActive: false,
      hazardActive: false, 
      boxSize: 55 
    })
  };

  pressSafe = (boxAnimation) => {
    Animated.timing(boxAnimation, {
      toValue: 50,
      duration: 500
    }).start();
    this.setState({ 
      safeActive: true, 
      allActive: false,
      warningActive: false,
      hazardActive: false, 
      boxSize: 65 
    })
  };

  pressWarning = (boxAnimation) => {
    Animated.timing(boxAnimation, {
      toValue: 120,
      duration: 500
    }).start();
    this.setState({ 
      warningActive: true, 
      safeActive: false,
      allActive: false,
      hazardActive: false, 
      boxSize: 85 
    })
  };

  pressHazard = (boxAnimation) => {
    Animated.timing(boxAnimation, {
      toValue: 210,
      duration: 500
    }).start();
    this.setState({ 
      hazardActive: true, 
      safeActive: false,
      warningActive: false,
      allActive: false, 
      boxSize: 85 
    })
  };


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

    renderAll = ({ item, index }) => {
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

      renderSafe = ({ item, index }) => {
        if (item.status == "Safe"){
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
      }
      };

      renderWarning = ({ item, index }) => {
        if (item.status == "Warning"){
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
        }
      };
      renderHazard = ({ item, index }) => {
        if (item.status == "Hazard"){
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
        }
      };

    render(){

      let data = mockData.sort((obj1, obj2) => obj1["name"] < obj2["name"] ? -1 : 1)
        return(
           <Container style={{backgroundColor: '#283618'}}>
               <Header style={styles.header}>
                   <Left>
                      <Icon name="camera" style={styles.icon} onPress={() => this.props.navigation.navigate("Camera")} />
                   </Left>
                   <Body>
                       <Text style={styles.title}>Library 📖</Text>
                   </Body>
                   <Right>
                     <Icon name="info" style={styles.icon}  onPress={() => this.props.navigation.navigate("Setting")} />
                   </Right>
               </Header>
               <Content>
               <View style={{marginLeft: 20, marginRight: 20}}>
               <SearchBar
                ref="searchBar"
                placeholder="Found a specific additives?"
                onChangeText={(value) => { this.search(value) }}
                keyboardAppearance={"light"}
                searchBarStyle={"minimal"}
                // onSearchButtonPress={...}
                // onCancelButtonPress={...}
                />
                </View>
                <View style={styles.backgroundFooter}>
                <View style={{flexDirection: "row", alignSelf:'center'}}>
                  <Animated.View style={{...styles.box, marginLeft: this.state.boxAnimation, position: "absolute", width: this.state.boxSize}} />
                  <Button transparent onPress={() => this.pressAll(this.state.boxAnimation)}><Text style={styles.button}>All</Text></Button>
                  <Button transparent onPress={() => this.pressSafe(this.state.boxAnimation)}><Text style={styles.button}>Safe</Text></Button>
                  <Button transparent onPress={() => this.pressWarning(this.state.boxAnimation)}><Text style={styles.button}>Warning</Text></Button>
                  <Button transparent onPress={() => this.pressHazard(this.state.boxAnimation)}><Text style={styles.button}>Hazard</Text></Button>
                </View>
                <FlatList
                  data={this.state.searchText && this.state.searchText.length > 2 ? this.state.searchedItems : data}
                  renderItem={this.state.allActive ? this.renderAll : this.state.safeActive ? this.renderSafe : this.state.warningActive ? this.renderWarning : this.renderHazard}
                  keyExtractor={data => data.code}
                />
                </View>
               </Content>
           </Container>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#283618',
        borderBottomWidth: 0
    },
    title: {
        fontSize: 25,
        fontWeight: "600",
        color: "white"
    },
    searchBar: {

    },
    icon:{
      fontSize: 25,
      marginRight: 25,
      marginLeft: 25,
      color: "white"
      // marginTop: 10
    },
    backgroundFooter: {
         // flexDirection:"row",
         justifyContent:"center",
         paddingTop: (isIphoneX() ? 15 : Platform.OS === "android" ? 0 : 0),
         // paddingTop: (isIphoneX() ? 15 : Platform.OS === "android" ? 25 : 0),
         height: (isIphoneX() ? 714 : Platform.OS === "android" ? 700 : 700),
         top:0,
         left:0,
         right:0,
         borderTopLeftRadius: 30,
         borderTopRightRadius: 30,
         backgroundColor: "white",
         marginTop: 10
    },
    button: {
      color: '#707070'
    },
  box: {
    height: 38,
    borderRadius: 20,
    backgroundColor: "#FEFAE0",
    // backgroundColor: "orange",
  }
})

export default Library;
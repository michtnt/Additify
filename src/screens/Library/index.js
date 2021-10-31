/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {Component} from 'react';
import {Animated, FlatList, StyleSheet, Platform} from 'react-native';
import {
  Header,
  Left,
  Right,
  Body,
  Text,
  Container,
  Content,
  View,
  Button,
} from 'native-base';
import SearchBar from 'react-native-search-bar';
import Icon from 'react-native-vector-icons/Feather';
import {isIphoneX} from 'react-native-iphone-x-helper';

import mockData from '../../data/mockData';
import LibraryList from './Components/LibraryList';

const filterTypes = [
  {type: 'All', value: 0, boxSize: 55},
  {type: 'Safe', value: 50, boxSize: 65},
  {type: 'Warning', value: 120, boxSize: 85},
  {type: 'Hazard', value: 210, boxSize: 85},
];
const data = mockData.sort((obj1, obj2) => (obj1.name < obj2.name ? -1 : 1));

class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: null,
      searchedItems: [],
      boxAnimation: new Animated.Value(0),
      boxSize: 50,
      curActive: 'a',
    };
  }

  pressFilter = (boxAnimation, value, boxSize, code) => {
    Animated.timing(boxAnimation, {
      toValue: value, // 0, 50, 120, 210
      duration: 500,
    }).start();
    this.setState({
      curActive: code,
      boxSize, // 55, 65, 85, 85
    });
  };

  search = (searchText) => {
    if (searchText.length > 2) {
      let searchedItems = [];
      const searchTextLowerCase = (searchText || '').toLowerCase();

      mockData.map((item, i) => {
        if (
          (item.name &&
            item.name.toLowerCase().includes(searchTextLowerCase)) ||
          (item.status &&
            item.status.toLowerCase().includes(searchTextLowerCase))
        ) {
          searchedItems.push(item);
        }
      });
      this.setState({
        searchedItems: searchedItems,
        searchText: searchText,
      });
    } else {
      this.setState({
        searchedItems: [],
        searchText: '',
      });
    }
  };

  renderItems = ({item, index}) => {
    if (
      item.status.toLowerCase() === this.state.curActive.toLowerCase() ||
      this.state.curActive === 'All'
    ) {
      return (
        <View style={{backgroundColor: 'transparent'}}>
          <LibraryList
            item={item}
            onPress={() => {
              this.props.navigation.navigate('LibraryDetails', {
                selectedLibrary: item,
                index,
              });
            }}
          />
        </View>
      );
    }
  };

  render() {
    return (
      <Container style={{backgroundColor: '#283618'}}>
        <Header style={styles.header}>
          <Left>
            <Icon
              name="camera"
              style={styles.icon}
              onPress={() => this.props.navigation.navigate('Camera')}
            />
          </Left>
          <Body>
            <Text style={styles.title}>Library 📖</Text>
          </Body>
          <Right>
            <Icon
              name="info"
              style={styles.icon}
              onPress={() => this.props.navigation.navigate('Setting')}
            />
          </Right>
        </Header>
        <Content>
          <View style={{marginLeft: 20, marginRight: 20}}>
            <SearchBar
              ref="searchBar"
              placeholder="Found a specific additives?"
              onChangeText={(value) => {
                this.search(value);
              }}
              keyboardAppearance={'light'}
              searchBarStyle={'minimal'}
            />
          </View>
          <View style={{...styles.backgroundFooter, flex: 1}}>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <Animated.View
                style={{
                  ...styles.box,
                  marginLeft: this.state.boxAnimation,
                  position: 'absolute',
                  width: this.state.boxSize,
                }}
              />
              {filterTypes.map(({type, value, boxSize}) => (
                <Button
                  transparent
                  onPress={() =>
                    this.pressFilter(
                      this.state.boxAnimation,
                      value,
                      boxSize,
                      type,
                    )
                  }>
                  <Text
                    style={{
                      color:
                        this.state.curActive === type ? '#707070' : 'white',
                    }}>
                    {type}
                  </Text>
                </Button>
              ))}
            </View>
            <FlatList
              data={
                this.state.searchText && this.state.searchText.length > 2
                  ? this.state.searchedItems
                  : data
              }
              renderItem={() => this.renderItems(this.state.curActive)}
              keyExtractor={(d) => d.code}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#283618',
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 25,
    fontWeight: '600',
    color: 'white',
  },
  searchBar: {},
  icon: {
    fontSize: 25,
    marginRight: 25,
    marginLeft: 25,
    color: 'white',
    // marginTop: 10
  },
  backgroundFooter: {
    // flexDirection:"row",
    justifyContent: 'center',
    paddingTop: isIphoneX() ? 15 : Platform.OS === 'android' ? 0 : 0,
    // paddingTop: (isIphoneX() ? 15 : Platform.OS === "android" ? 25 : 0),
    height: isIphoneX() ? 714 : Platform.OS === 'android' ? 700 : 700,
    top: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: 'white',
    marginTop: 10,
  },
  box: {
    height: 38,
    borderRadius: 20,
    backgroundColor: '#FEFAE0',
    // backgroundColor: "orange",
  },
});

export default Library;

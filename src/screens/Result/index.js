/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {
  Container,
  Content,
  List,
  ListItem,
  Header,
  Left,
  Text,
  Body,
  Right,
  View,
} from 'native-base';
import Icon from 'react-native-vector-icons/Feather';
import mockData from '../../data/mockData';
import LibraryList from '../Library/Components/LibraryList';

class Result extends Component {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      result: [],
    };
  }

  renderItem = ({item, index}) => {
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
  };

  componentDidMount() {
    let detectedItems = []; // result of matching text detection result and database
    let stringArray = new Array(); // result of process of separating sentence to word
    let touched = ['ensure no duplicate']; // so that an additive is not scanned twice

    const detectionResult = this.props.navigation.getParam('result'); // get the text detection result
    if (detectionResult) {
      // if there is result
      detectionResult.map((first) => {
        // first depth
        first.map((second) => {
          // second depth
          let string = second.text;
          string = string.split(' '); // split texts by space
          for (let i = 0; i < string.length; i++) {
            if (string[i].length > 0 && string[i].length != '') {
              // if it's not [""] push it to the stringArray
              stringArray.push(string[i].toLowerCase());
            }
          }
          mockData.map((item) => {
            // match with database
            // if additive exist, not scanned twice, and match database
            if (
              item.name &&
              !touched.includes(item.name) &&
              (item.name.toLowerCase().includes(stringArray) ||
                stringArray.indexOf(item.name) > -1)
            ) {
              console.log('detected Items');
              console.log(item.name);
              touched.push(item.name.toLowerCase()); // push it to the touched array to ensure no duplicate
              detectedItems.push(item); // push to final result
            }
          });
        });
      });
      console.log('detected texts: ');
      console.log(stringArray);
      this.setState({result: detectedItems});
    }
  }
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <Left>
            <Icon
              name="x"
              onPress={() => this.props.navigation.goBack()}
              style={styles.icon}
            />
          </Left>
        </Header>
        <Content>
          <FlatList
            data={this.state.result}
            renderItem={this.renderItem}
            keyExtractor={(data) => data.code}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
    borderBottomWidth: 0,
  },
  title: {
    fontSize: 25,
    marginLeft: 25,
    fontWeight: 'bold',
  },
  searchBar: {},
  icon: {
    fontSize: 25,
    marginLeft: 20,
    // marginTop: 10
  },
});

export default Result;

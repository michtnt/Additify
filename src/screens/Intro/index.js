/* eslint-disable prettier/prettier */

import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import { Container, Header, Content } from "native-base";
import { NavigationActions, StackActions } from "react-navigation";
import AsyncStorage from '@react-native-community/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from "react-native-vector-icons/Feather";

const gotoMain = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Main" })]
});

const deviceWidth = Dimensions. get('window').width;
const deviceHeight = Dimensions. get('window').height;

const slides = [
    {
      key: 'one',
      title: 'Discover wellness.',
      text: 'For real and for free.',
      image: require('../../../assets/fancy-plants.png'),
      backgroundColor: '#264218',
    },
    {
      key: 'two',
      title: 'Get educated.',
      text: 'Identify safe and dangerous additives.',
      image: require('../../../assets/croods.png'),
      backgroundColor: '#264218',
    },
    {
      key: 'three',
      title: 'Health Empowers You.',
      text: 'An apple a day keeps the doctor away.',
      image:  require('../../../assets/the-munchies.png'),
      backgroundColor: '#264218',
    }
  ];
  
  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      backgroundColor: '#BAE4B4',
    },
    image: {
      width: deviceWidth,
      height: deviceHeight/2,
      marginVertical: 32,
      alignSelf: "center",
      resizeMode:'contain'
    },
    text: {
      color: '#52A470',
      marginLeft: 20,
      fontSize: 20
    },
    title: {
      fontSize: 35,
      color: '#012F3C',
      marginLeft: 20,
      marginTop: deviceWidth / 5,
      fontWeight: "bold"
    },
    subtitle:{
      color: '#52A470',
      fontSize: 15,
      alignSelf: "center",
      textAlign: "center",
      marginLeft: 20,
      marginRight: 20
    },
    button:{
      color: '#012F3C',
      fontSize: 18,
      marginTop: 15
    }
  });

  export default class Intro extends Component {
    _renderItem = ({ item }) => {
      return (
        <Container style={styles.slide}>
          <Content>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>{item.text}</Text>
          <Image source={item.image} style={styles.image} />
          { item.key == 'one' ?
          <Text style={styles.subtitle}>Be healthier by checking on any additives you have consumed.</Text>
          : item.key == 'two' ?
          <Text style={styles.subtitle}>You can see where this additive is commonly found, functions and much more.</Text>
          : <Text style={styles.subtitle}>One step at a time, let's build a healthier you.</Text>
          }
          </Content>
        </Container>
      );
    }
    _renderSkipButton = () => {
      return (
        <View style={styles.buttonCircle}>
          <Text style={styles.button}>Skip</Text>
        </View>
      );
    };
    _renderNextButton = () => {
      return (
        <View>
          <Text style={styles.button}>Next</Text>
        </View>
      );
    };
    _onDone = async () => {
      // User finished the introduction. Show real app through
      // navigation or simply by controlling state
      await AsyncStorage.setItem('@finish_intro', JSON.stringify(true))
      this.props.navigation.dispatch(gotoMain);
    }
    render() {
        return <AppIntroSlider 
        renderItem={this._renderItem} 
        data={slides} 
        onDone={this._onDone} 
        showSkipButton
        renderSkipButton={this._renderSkipButton}
        renderNextButton={this._renderNextButton}
        />;
    }
  }
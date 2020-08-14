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
      image: require('../../../screen-design/elements/IntroScreen-1.png'),
      backgroundColor: '#264218',
      message: 'Be healthier by checking on any additives you have consumed.'
    },
    {
      key: 'two',
      title: 'Get educated.',
      text: 'Identify safe and dangerous additives.',
      image: require('../../../screen-design/elements/IntroScreen-2.png'),
      backgroundColor: '#264218',
      message: 'You can see where this additive is commonly found, functions and much more.'
    },
    {
      key: 'three',
      title: 'Health Empowers You.',
      text: 'An apple a day keeps the doctor away.',
      image:  require('../../../assets/the-munchies.png'),
      backgroundColor: '#264218',
      message: 'One step at a time, let\'s build a healthier you.'
    }
  ];
  
  const styles = StyleSheet.create({
    slide: {
      flex: 1,
      // alignItems: 'center',
      // justifyContent: 'center',
      // backgroundColor: '#BAE4B4',
      backgroundColor: '#283618'
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
      // color: '#012F3C',
      color: 'white',
      fontWeight: "bold",
      alignSelf: "center"
    },
    subtitle:{
      // color: '#52A470',
      color: 'white',
      fontSize: 15,
      alignSelf: "center",
      textAlign: "center",
      marginLeft: 30,
      marginRight: 30,
      marginTop: 10
    },
    button:{
      // color: '#012F3C',
      color: 'white',
      fontSize: 18,
      marginTop: 15
    }
  });

  export default class Intro extends Component {
    _renderItem = ({ item }) => {
      return (
        <Container style={styles.slide}>
          <Content>
          <Image source={item.image} style={styles.image} />
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.message}</Text>
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
        // showSkipButton
        // renderSkipButton={this._renderSkipButton}
        renderNextButton={this._renderNextButton}
        />;
    }
  }
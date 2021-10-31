/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  Platform,
} from 'react-native';
import {Container, Content} from 'native-base';
import {NavigationActions, StackActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Feather';
import {isIphoneX} from 'react-native-iphone-x-helper';

const gotoMain = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({routeName: 'Library'})],
});
const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const slides = [
  {
    key: 'one',
    title: 'Discover wellness.',
    text: 'For real and for free.',
    image: require('../../../screen-design/elements/IntroScreen-1.png'),
    backgroundColor: '#264218',
    message: 'Be healthier by checking on any additives you have consumed.',
  },
  {
    key: 'two',
    title: 'Get educated.',
    text: 'Identify safe and dangerous additives.',
    image: require('../../../screen-design/elements/IntroScreen-2.png'),
    backgroundColor: '#264218',
    message:
      'You can see where this additive is commonly found, functions and much more.',
  },
  {
    key: 'three',
    title: 'Health empowers you.',
    text: 'An apple a day keeps the doctor away.',
    image: require('../../../screen-design/elements/IntroScreen-3.png'),
    backgroundColor: '#264218',
    message: "One step at a time, let's build a healthier you.",
  },
];
export default class Intro extends Component {
  _renderItem = ({item}) => {
    return (
      <Container style={styles.slide}>
        {item.key !== 'three' ? (
          <Content>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.message}</Text>
          </Content>
        ) : (
          <View style={styles.backgroundTop}>
            <Image
              source={item.image}
              style={{...styles.image, height: deviceHeight / 2 - 100}}
            />
            <Text style={{...styles.title, color: '#283618'}}>
              {item.title}
            </Text>
            <Text style={{...styles.subtitle, color: '#283618'}}>
              {item.message}
            </Text>
          </View>
        )}
      </Container>
    );
  };

  _renderSkipButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={styles.button}>Skip</Text>
      </View>
    );
  };

  _renderNextButton = () => {
    return (
      <View style={{bottom: 30}}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Next</Text>
        </View>
      </View>
    );
  };

  _renderDoneButton = () => {
    return (
      <View style={{bottom: 30}}>
        <Text
          style={{
            ...styles.buttonText,
            marginRight: deviceWidth / 2 - 130,
            color: 'white',
            fontSize: 25,
          }}>
          Let's get Started <Icon name="arrow-right" style={{fontSize: 20}} />
        </Text>
      </View>
    );
  };

  _onDone = async () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    await AsyncStorage.setItem('@finish_intro', JSON.stringify(true));
    this.props.navigation.dispatch(gotoMain);
  };

  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        activeDotStyle={styles.activeDotStyle}
        dotStyle={styles.dotStyle}
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
      />
    );
  }
}

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    // backgroundColor: '#BAE4B4',
    backgroundColor: '#283618',
  },
  image: {
    width: deviceWidth,
    height: deviceHeight / 2,
    marginVertical: 32,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  text: {
    color: '#52A470',
    marginLeft: 20,
    fontSize: 20,
  },
  title: {
    fontSize: 35,
    // color: '#012F3C',
    color: 'white',
    fontWeight: '500',
    alignSelf: 'center',
    marginLeft: 20,
    marginRight: 20,
  },
  subtitle: {
    // color: '#52A470',
    color: 'white',
    fontSize: 20,
    alignSelf: 'center',
    textAlign: 'center',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
  },
  buttonText: {
    color: '#283618',
    fontSize: 20,
    marginLeft: 20,
    // marginTop: 5
    // marginTop: 15,
    // marginRight: deviceWidth/2 - 40,
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
    width: 100,
    height: 50,
    borderRadius: 20,
    marginRight: deviceWidth / 2 - 70,
  },
  backgroundTop: {
    // flexDirection:"row",
    justifyContent: 'center',
    paddingTop: isIphoneX() ? 15 : Platform.OS === 'android' ? 0 : 0,
    // paddingTop: (isIphoneX() ? 15 : Platform.OS === "android" ? 25 : 0),
    height: isIphoneX() ? 714 : Platform.OS === 'android' ? 500 : 500,
    top: 0,
    left: 0,
    right: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: 'white',
  },
  activeDotStyle: {
    width: 40,
    backgroundColor: 'white',
    marginBottom: 140,
  },
  dotStyle: {
    width: 10,
    backgroundColor: 'grey',
    marginBottom: 140,
  },
});

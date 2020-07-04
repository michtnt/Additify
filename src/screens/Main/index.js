/* eslint-disable prettier/prettier */

import React, { Component } from "react";
import { StyleSheet, Platform, Dimensions, TouchableOpacity, Platforms, Text, View, StatusBar } from "react-native";
import { Container, Header, Content, Card, CardItem, Body, Left, Button, Icon, Right} from 'native-base';
import * as Animatable from "react-native-animatable";
import { isIphoneX } from "react-native-iphone-x-helper";
import DeviceInfo from "react-native-device-info";

import TabBarFooter from "./Components/TabBarFooter";

const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const hasNotch = DeviceInfo.hasNotch();

class Main extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        swipeScreenIndex: 0,
        searchText: "",
        backgroundFoldedUp: [false,false,false,false],
        topCardHidden: false 
       };
    }

      prevContentOffset = 0;
      topBarFolded = false;
    
      backgroundSlideUp = () => {
        this.topBarFolded = true;
        if (this.animatedItem && this.animatedItem.transitionTo){
          this.animatedItem.transitionTo({opacity: 0,
            zIndex:-100
          });
        }
        this.setState({topCardHidden: true});
        if (this.animatedIcon && this.animatedIcon.transitionTo){
          this.animatedIcon.transitionTo({
            top: 39,
            right:15,backgroundColor:"#fbd78b",width: 35,height: 35});
        }
    
        setTimeout(() => {
          if (this.animatedBack && this.animatedBack.transitionTo){
            this.animatedBack.transitionTo({
              borderRadius: 0,
              marginTop: -deviceWidth * 2.5 + (Platform.OS === "ios" ? (isIphoneX() ? 80 : 65) : 80)
            });
          }
        },500);
      }
    
      backgroundSlideDown = () =>{
        this.topBarFolded = false;
        if (this.animatedItem && this.animatedItem.transitionTo){
          this.animatedItem.transitionTo({opacity: 1,zIndex:1});
        }
        this.setState({topCardHidden: false});
        if (this.animatedIcon && this.animatedIcon.transitionTo){
          this.animatedIcon.transitionTo({top:110,right:32,backgroundColor:"#ff4e6a",width: 48,height: 48});
        }
    
        setTimeout(() => {
          // 에러방지
          if (this.animatedBack && this.animatedBack.transitionTo){
            this.animatedBack.transitionTo({
              borderRadius: (deviceWidth * 2.5) / 2,
              marginTop: -deviceWidth * 2.5 + (Platform.OS === "ios" ? (isIphoneX() ? 235 : 220) : 235)
            });
          }
        },500);
      }
    
      handleTopBackground = (event) => {
        if ( !this.topBarFolded && event.nativeEvent.contentOffset.y > (this.state.swipeScreenIndex == 0 ? 30 : 50) && event.nativeEvent.contentOffset.y > this.prevContentOffset){
          //현재 screen에 fold되었는지 아닌지 기록
          const backgroundFoldedUp_temp = this.state.backgroundFoldedUp;
          backgroundFoldedUp_temp[this.state.swipeScreenIndex] = true;
          this.setState({backgroundFoldedUp:backgroundFoldedUp_temp});
    
          this.backgroundSlideUp();
        }
    
        if ( this.topBarFolded && event.nativeEvent.contentOffset.y < (this.state.swipeScreenIndex == 0 ? 100 : 50) && event.nativeEvent.contentOffset.y < this.prevContentOffset){
          //현재 screen에 fold되었는지 아닌지 기록
          const backgroundFoldedUp_temp = this.state.backgroundFoldedUp;
          backgroundFoldedUp_temp[this.state.swipeScreenIndex] = false;
          this.setState({backgroundFoldedUp:backgroundFoldedUp_temp});
    
          this.backgroundSlideDown();
        }
        this.prevContentOffset = event.nativeEvent.contentOffset.y;
      }

    render() {
        return (
      <View style={[{ flex: 1,
      // background:"white"
      },Platform.OS === "android" && hasNotch ? { marginTop:25 } : {}]}>
        <StatusBar
          translucent
          backgroundColor="rgba(0, 0, 0, 0)"
          style={{ marginTop:100 }}
        />
        <Animatable.View
          ref={(ref) => this.animatedBack = ref}
          // animation="pulse"
          easing="ease-out"
          style={[{
            backgroundColor:"white",
            position:"absolute",
            width: deviceWidth * 2.5,
            height: deviceWidth * 2.5,
            marginLeft: -(deviceWidth * 2.5 - deviceWidth) / 2,
            borderRadius: (deviceWidth * 2.5) / 2,
            marginTop: -deviceWidth * 2.5 + (Platform.OS === "ios" ? (isIphoneX() ? 235 : 220) : 235)
          }]}
        />
          <TabBarFooter
            {...this.props}
            navigation={this.props.navigation}
            handleTopBackground={this.handleTopBackground}
            swipeScreenIndex={this.state.swipeScreenIndex}
            onScreenChange={(swipeScreenIndex)=>{
              this.setState({swipeScreenIndex},
              ()=>{
                if (this.state.backgroundFoldedUp[swipeScreenIndex]){
                  this.backgroundSlideUp();
                } else {
                  this.backgroundSlideDown();
                }
              });
            }}
          backgroundFoldedUp={this.state.backgroundFoldedUp}
          closePage={()=>{
          if (this.state.backgroundFoldedUp) {
            this.backgroundSlideDown();
            setTimeout(()=>{
              this.props.navigation.goBack();
            },100);
          } else {
            this.props.navigation.goBack();
          }
          this.setState({swipeScreenIndex:0});
        }}
      />
      </View>
        )
    }
}

export default Main;
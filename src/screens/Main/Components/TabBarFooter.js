/* eslint-disable prettier/prettier */

import React, { PureComponent } from "react";
import { Text, Image, View, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { TabView, TabBar, SceneMap } from "react-native-tab-view";
import { isIphoneX } from "react-native-iphone-x-helper";
import DeviceInfo from "react-native-device-info";
import * as Animatable from "react-native-animatable";

import Library from "../../Library";
import Camera from  "../../Camera";
import Setting from "../../Settings";

// import Animated from "react-native-reanimated";
const AnimatableIcon = Animatable.createAnimatableComponent(Icon);

const initialLayout = {
  height: 0,
  width: Dimensions.get("window").width,
};

export default class TabBarFooter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      index: props.swipeScreenIndex,
      routes: [
        {
          key: "Library",
          icon: "book",
          color: "#09bcbc",
          title: "Library",
          index: 0
        },
        {
          key: "Camera",
          icon: "camera",
          color:  "#09bcbc",
          title: "Camera",
          index: 1
        },
        {
          key: "Settings",
          icon: "settings",
          color: "#09bcbc",
          title: "Settings",
          index: 2
        },
      ],
    };
  }

  handleViewRef = ref => this.view = ref;
    // START : footer
    _handleIndexChange = index =>{
      // if (this.prevIndex && this.prevIndex != this.state.index){
      switch (index) {
        case 0:
          this.handelIcon_0.transitionTo({ color: "black" });
          break;
        case 1:
          this.handelIcon_1.transitionTo({ color: "black" });
          break;
        case 2:
          this.handelIcon_2.transitionTo({ color: "black" });
          break;
        case 3:
          this.handelIcon_3.transitionTo({ color: "black" });
          break;
        default:
          break;
      }

      switch (this.state.index) {
        case 0:
          this.handelIcon_0.transitionTo({ color: "#ccc" });
          break;
        case 1:
          this.handelIcon_1.transitionTo({ color: "#ccc" });
          break;
        case 2:
          this.handelIcon_2.transitionTo({ color: "#ccc" });
          break;
        case 3:
          this.handelIcon_3.transitionTo({ color: "#ccc" });
          break;
        default:
          break;
      }

      this.setState({
        index,
      });
      this.props.onScreenChange(index);
    }

  prevIndex = null;

  _renderIcon = props => {

    const { route } = props;

    return (
      <AnimatableIcon
        name={route.icon}
        size={24}
        style={[styles.icon,{
          // color
          color : this.state.index === route.index ? "black" : "#ccc"
          }]}
        ref={ref => this["handelIcon_" + route.index] = ref}
        duration={750}
      />

  );};

  _renderLabel = props => {

    const { route } = props;

    return (
      <Text style={{
          color : this.state.index === route.index ? "black" : "#ccc"
          , margin: 8 }}>
        {route.title}
      </Text>

  );};


  _renderTabBar = props => (
    <TabBar
      {...props}
      renderIcon={this._renderIcon}
      renderLabel={this._renderLabel}
      style={styles.tabbar}
    />
  );

  _renderScene = ({ route }) => {
    switch (route.key) {
      case "Library":
        return <Library
          {...this.props}
        />;
      case "Camera":
        return <Camera
          {...this.props}
        />;
      case "Settings":
        return <Setting
         {...this.props}
         />;
      default:
        return null;
    }
  }
  //END : footer

  FirstRoute = () => (
    <View style={[{ backgroundColor: "#ff4081", flex: 1 }]} />
  );

  SecondRoute = () => (
    <View style={[{ backgroundColor: "#673ab7", flex: 1 }]} />
  );

  state = {
    index: 0,
    routes: [
      { key: "first", title: "First" },
      { key: "second", title: "Second" },
    ],
  };

  render() {
    return (
        <TabView
          ref={this.handleViewRef}
          style={[this.props.style]}
          // transition={{opacity:1}}
          navigationState={this.state}
          renderScene={this._renderScene}
          renderTabBar={this._renderTabBar}
          tabBarPosition="bottom"
          onIndexChange={this._handleIndexChange}
         />
    );
  }
}

const styles = StyleSheet.create({

  container1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // opacity: 0.7,
    opacity:1
  },
  tabbar: {
    backgroundColor: "white",
    marginBottom: DeviceInfo.isTablet() || isIphoneX() ? 0 : 0,
    borderTopColor:"#eee",
    borderTopWidth:1,
    shadowOpacity: 0
  },
  icon: {
    backgroundColor: "transparent",
    // color: "grey",
    color: "#eee"
  },

  indicator: {
    zIndex:1,
    width: 37,
    height: 37,
    borderRadius: 24,
    backgroundColor: "#01baba",

    margin: 6
  },
  badge: {
    marginTop: 4,
    marginRight: 32,
    backgroundColor: "#f44336",
    height: 24,
    width: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },
  count: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginTop: -2,
  },
});

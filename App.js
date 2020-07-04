/* eslint-disable prettier/prettier */
//@flow

import React from "react";

import "react-native-gesture-handler";
import Navigation, { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Root } from "native-base";


import Library from "./src/screens/Library";

export default (props) =>{

  const RootStack = createStackNavigator({
    Library: { screen: Library }
  },
  {
    index: 0,
    initialRouteName: "Library",
    headerMode: "none"
  });


  const AppContainer = createAppContainer(RootStack);

  return <Root>
            <AppContainer/>
         </Root>;
  };
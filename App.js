/* eslint-disable prettier/prettier */
//@flow

import React from "react";

import "react-native-gesture-handler";
import Navigation, { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Root } from "native-base";
import Main from './src/screens/Main';
import LibraryDetails from './src/screens/Library/Components/LibraryDetails';
import Camera from './src/screens/Camera';
// import Library from "./src/screens/Library";

export default (props) =>{

  const RootStack = createStackNavigator({
    Main : { screen: Main },
    LibraryDetails : { screen: LibraryDetails },
    Camera: { screen: Camera }
  },
  {
    index: 0,
    initialRouteName: "Main",
    headerMode: "none"
  });


  const AppContainer = createAppContainer(RootStack);

  return <Root>
            <AppContainer/>
         </Root>;
  };
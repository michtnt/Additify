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
import Intro from './src/screens/Intro';
import FAQ from './src/screens/Settings/components/FAQ';
import AsyncStorage from '@react-native-community/async-storage';

// import Library from "./src/screens/Library";

const firstTime = async () => {
  return await AsyncStorage.getItem('@finish_intro') == true
}
export default (props) =>{

  const RootStack = createStackNavigator({
    Main : { screen: Main },
    LibraryDetails : { screen: LibraryDetails },
    Camera: { screen: Camera },
    Intro: { screen: Intro },
    FAQ: { screen: FAQ }
  },
  {
    index: 0,
    initialRouteName: firstTime() ? "Main" : "Intro",
    headerMode: "none"
  });


  const AppContainer = createAppContainer(RootStack);

  return <Root>
            <AppContainer/>
         </Root>;
  };
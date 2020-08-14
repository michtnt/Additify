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
import PrivacyPolicy from './src/screens/Settings/components/PrivacyPolicy';
import Terms from './src/screens/Settings/components/Terms';
import Result from './src/screens/Result';
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
    FAQ: { screen: FAQ },
    PrivacyPolicy: { screen: PrivacyPolicy },
    Terms: { screen: Terms },
    Result: { screen: Result }
  },
  {
    index: 0,
    initialRouteName: !firstTime() ? "Main" : "Intro",
    headerMode: "none"
  });


  const AppContainer = createAppContainer(RootStack);

  return <Root>
            <AppContainer/>
         </Root>;
  };
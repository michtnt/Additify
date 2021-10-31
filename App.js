import React from 'react';

import 'react-native-gesture-handler';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Root} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import Main from './src/screens/Main';
import LibraryDetails from './src/screens/Library/Components/LibraryDetails';
import Library from './src/screens/Library';
import Camera from './src/screens/Camera';
import Intro from './src/screens/Intro';
import Setting from './src/screens/Settings';
import FAQ from './src/screens/Settings/components/FAQ';
import PrivacyPolicy from './src/screens/Settings/components/PrivacyPolicy';
import Terms from './src/screens/Settings/components/Terms';
import Result from './src/screens/Result';

const firstTime = async () => {
  return (await AsyncStorage.getItem('@finish_intro')) === true; // improvement: could have use redux
};

export default (props) => {
  const RootStack = createStackNavigator(
    {
      Main: {screen: Main},
      Library: {screen: Library},
      LibraryDetails: {screen: LibraryDetails},
      Camera: {screen: Camera},
      Intro: {screen: Intro},
      Setting: {screen: Setting},
      FAQ: {screen: FAQ},
      PrivacyPolicy: {screen: PrivacyPolicy},
      Terms: {screen: Terms},
      Result: {screen: Result},
    },
    {
      index: 0,
      initialRouteName: !firstTime() ? 'Library' : 'Intro',
      headerMode: 'none',
    },
  );

  const AppContainer = createAppContainer(RootStack);

  return (
    <Root>
      <AppContainer />
    </Root>
  );
};

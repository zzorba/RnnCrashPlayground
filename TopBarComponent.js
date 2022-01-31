/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Navigation } from 'react-native-navigation';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TopBarButton from './TopBarButton';

export default function TopBarScreen({ componentId, includeTopBarButtons }) {
  const isDarkMode = useColorScheme() === 'dark';

  useEffect(() => {
    Navigation.mergeOptions(componentId, {
      topBar: {
        title: {
          text: 'Screen w/ Buttons',
        },
        rightButtons: includeTopBarButtons ? [
          {
            id: 'blue',
            component: {
              name: 'com.myApp.TopBarButton',
              passProps: {
                color: 'blue',
              },
              width: TopBarButton.WIDTH,
              height: TopBarButton.HEIGHT,
            },
          },
          {
            id: 'red',
            component: {
              name: 'com.myApp.TopBarButton',
              passProps: {
                color: 'red',
              },
              width: TopBarButton.WIDTH,
              height: TopBarButton.HEIGHT,
            },
          },
        ] : [],
      },
    });
  }, [componentId, includeTopBarButtons]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            padding: 32,
          }}>
          <Text style={{ marginBottom: 32 }}>
            Use the hardware back button to close this screen.
          </Text>
          <Text>
            { includeTopBarButtons ? 'The app should crash on API 30, maybe other versions as well.' : 'The app should not crash because there are no top bar buttons'}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

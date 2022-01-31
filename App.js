/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useCallback } from 'react';
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

const Section = ({children, title, componentId }): Node => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = ({ componentId }) => {
  const isDarkMode = useColorScheme() === 'dark';
  const pushScreenNoButtons = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        name: 'com.myApp.TopBarScreen',
        includeTopBarButtons: false,
      },
    });
  }, [componentId]);
  const pushScreenButtons = useCallback(() => {
    Navigation.push(componentId, {
      component: {
        name: 'com.myApp.TopBarScreen',
        passProps: {
          includeTopBarButtons: true,
        },
      },
    });
  }, [componentId]);
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <View style={{ margin: 16 }}>
            <TouchableOpacity onPress={pushScreenNoButtons}>
              <View style={{ backgroundColor: 'red', padding: 8, borderRadius: 4 }}>
                <Text style={{ color: 'white' }}>Push normal screen (works)</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ margin: 16 }}>
            <TouchableOpacity onPress={pushScreenButtons}>
              <View style={{ backgroundColor: 'blue', padding: 8, borderRadius: 4 }}>
                <Text style={{ color: 'white' }}>Push screen with nav buttons(crash) </Text>
              </View>
            </TouchableOpacity>
          </View>
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

export default App;

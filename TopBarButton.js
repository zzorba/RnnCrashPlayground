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

function TopBarButton({ color }) {
  return (
    <View
      style={{
        backgroundColor: color,
        width: 20,
        height: 20,
        marginRight: 8,
        position: 'relative',
      }}>
      <Text style={{ color: 'white' }}>X</Text>
    </View>
  );
}

TopBarButton.WIDTH = 20 + 8;
TopBarButton.HEIGHT = 20;

export default TopBarButton;

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

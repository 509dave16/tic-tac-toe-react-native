/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Grid from './components/Grid.js';
import styles from './components/styles/root-styles.js';

class SamTicTacToe extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Grid pressHandler={() => { } }
          grid={{
            size: 3,
            cells: ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
            initialized: true
          }}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('SamTicTacToe', () => SamTicTacToe);

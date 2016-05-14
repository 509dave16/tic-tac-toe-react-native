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
      <View style={styles.container} onLayout={(event) => { 
      console.log(event);
      }}>
        <Grid pressHandler={() => { } }
          grid={{
            size: 3,
            cells: ['X', 'O', 'X', 'O', 'X', 'X', 'O', 'X', 'X'],
            initialized: true
          }}
          />
      </View>
    );
  }
}

AppRegistry.registerComponent('SamTicTacToe', () => SamTicTacToe);

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
import RoundButtonGroup from './components/RoundButtonGroup.js';
import SingleInputForm from './components/SingleInputForm.js';
import LabelKeyValueList from './components/LabelKeyValueList.js';
import ButtonList from './components/ButtonList.js';
import styles from './components/styles/root-styles.js';

class SamTicTacToe extends Component {
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.container}>
          <RoundButtonGroup
            selectionHandler={(button) => { console.log(`Button ${button} clicked!`) } }
            selected=''
            buttons={['Host Game', 'Join Game', 'Local Game']}
            />
          <SingleInputForm
            show={true}
            defaultInputText={'Please enter a Session ID....'}
            submitHandler={(text) => { console.log(text); } }
            />
          <LabelKeyValueList keyValuePairs={{
            'Session ID:' : '-348dh834sjdfh8',
            'Player:' : 'X',
            'Game Status:' : 'Waiting for player to join game!'
          }}/>
          <Grid
            pressHandler={() => { } }
            grid={{
              size: 3,
              cells: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
              initialized: true
            }}
            />
          <ButtonList buttons={[
            {name: 'Restart', pressHandler: () => {}, show: true},
            {name: 'Quit', pressHandler: () => {}, show: true},
          ]}/>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('SamTicTacToe', () => SamTicTacToe);

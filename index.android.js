// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  */

// import React, { Component } from 'react';
// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   View
// } from 'react-native';
// import Grid from './components/presentational/Grid.js';
// import RoundButtonGroup from './components/presentational/RoundButtonGroup.js';
// import SingleInputForm from './components/presentational/SingleInputForm.js';
// import LabelKeyValueList from './components/presentational/LabelKeyValueList.js';
// import ButtonList from './components/presentational/ButtonList.js';
// import styles from './components/presentational/styles/root-styles.js';

// class SamTicTacToe extends Component {
//   render() {
//     return (
//       <View style={styles.background}>
//         <View style={styles.container}>
//           <RoundButtonGroup
//             selectionHandler={(button) => { console.log(`Button ${button} clicked!`) } }
//             selected=''
//             buttons={['Host Game', 'Join Game', 'Local Game']}
//             />
//           <SingleInputForm
//             show={true}
//             defaultInputText={'Please enter a Session ID....'}
//             submitHandler={(text) => { console.log(text); } }
//             />
//           <LabelKeyValueList keyValuePairs={{
//             'Session ID:' : '-348dh834sjdfh8',
//             'Player:' : 'X',
//             'Game Status:' : 'Waiting for player to join game!'
//           }}/>
//           <Grid
//             pressHandler={() => { } }
//             grid={{
//               size: 3,
//               cells: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
//               initialized: true
//             }}
//             />
//           <ButtonList buttons={[
//             {name: 'Restart', pressHandler: () => {}, show: true},
//             {name: 'Quit', pressHandler: () => {}, show: true},
//           ]}/>
//         </View>
//       </View>
//     );
//   }
// }

// AppRegistry.registerComponent('SamTicTacToe', () => SamTicTacToe);

import React from 'react';
import { AppRegistry } from 'react-native';
import App from './index.js';

AppRegistry.registerComponent('SamTicTacToe', () => App);
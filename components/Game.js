import React, {Component} from 'react';
import {
  View
} from 'react-native';
import {Provider} from 'react-redux';
import GameType from './container/GameType.js';
import JoinGameForm from './container/JoinGameForm.js';
import StatusLabels from './container/StatusLabels.js';
import GameBoard from './container/GameBoard.js';
import GameButtons from './container/GameButtons.js';
import styles from './presentational/styles/root-styles.js';

export default ({
  store,
  present
}) => {
  return (
    <Provider store={store}>
			<View style={styles.background}>
        <View style={styles.container}>
					<GameType present={present} buttons={['Host Game', 'Join Game', 'Local Game']}/>
					<JoinGameForm present={present}/>
					<StatusLabels />
					<GameBoard present={present}/>
					<GameButtons present={present}/>
				</View>
			</View>
    </Provider>
  )
};

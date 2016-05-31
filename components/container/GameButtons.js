import React, {Component} from 'react'
import {connect} from 'react-redux'
import ButtonList from './../presentational/ButtonList.js';

const mapStoreToProps = (store, ownProps) => {
  const showQuit = store.gameType === 'Host Game' || (store.gameStatus.indexOf('turn') !== -1) || store.done;
  const showRestart = store.gameType !== 'Join Game' && store.done;
  return {
    buttons: [
      {name: 'Restart', pressHandler: () => ownProps.actions.initiateRestartAction(), show: showRestart},
      {name: 'Quit', pressHandler: () => ownProps.actions.initiateQuitAction(), show: showQuit}
    ]
  };
};

const GameButtons = connect(mapStoreToProps)(ButtonList);
export default GameButtons;
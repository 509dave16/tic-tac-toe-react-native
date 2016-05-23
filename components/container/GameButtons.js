import React, {Component} from 'react'
import {connect} from 'react-redux'
import ButtonList from './../presentational/ButtonList.js';
import {initiateQuitAction, initiateRestartAction} from './../../sam/actions/view';

const mapStoreToProps = (store, ownProps) => {
  const showQuit = store.gameType === 'Host Game' || (store.gameStatus.indexOf('turn') !== -1) || store.done;
  const showRestart = store.gameType !== 'Join Game' && store.done;
  return {
    buttons: [
      {name: 'Restart', pressHandler: () => initiateRestartAction(ownProps.present), show: showRestart},
      {name: 'Quit', pressHandler: () => initiateQuitAction(ownProps.present), show: showQuit}
    ]
  };
};

const GameButtons = connect(mapStoreToProps)(ButtonList);
export default GameButtons;
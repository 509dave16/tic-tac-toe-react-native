import React, {Component} from 'react'
import { connect } from 'react-redux'
import RoundButtonGroup from './../presentational/RoundButtonGroup.js';

const mapStoreToProps = (store, ownProps) => {
  return {
    selected: store.gameType,
    buttons: ownProps.buttons,
    selectionHandler: (gameType) => ownProps.actions.setGameTypeAction(gameType)
  };
};
const GameType = connect(mapStoreToProps)(RoundButtonGroup);
export default GameType;

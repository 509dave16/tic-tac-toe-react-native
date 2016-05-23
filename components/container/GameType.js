import React, {Component} from 'react'
import { connect } from 'react-redux'
import RoundButtonGroup from './../presentational/RoundButtonGroup.js';
import { setGameTypeAction } from './../../sam/actions/view';

const mapStoreToProps = (store, ownProps) => {
  return {
    selected: store.gameType,
    buttons: ownProps.buttons,
    selectionHandler: (gameType) => setGameTypeAction(ownProps.present, gameType)
  };
};
const GameType = connect(mapStoreToProps)(RoundButtonGroup);
export default GameType;

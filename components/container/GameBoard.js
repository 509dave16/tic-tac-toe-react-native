import React, {Component} from 'react'
import { connect } from 'react-redux'
import Grid from './../presentational/Grid.js';
import { markGridAction } from './../../sam/actions/view';

const mapStoreToProps = (store, ownProps) => {
  return {
    grid: store.grid,
    pressHandler: (cellIndex) => markGridAction(ownProps.present, cellIndex)
  };
};
const GameType = connect(mapStoreToProps)(Grid);
export default GameType;
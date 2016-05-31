import React, {Component} from 'react'
import { connect } from 'react-redux'
import Grid from './../presentational/Grid.js';

const mapStoreToProps = (store, ownProps) => {
  return {
    grid: store.grid,
    pressHandler: (cellIndex) => ownProps.actions.markGridAction(cellIndex)
  };
};
const GameBoard = connect(mapStoreToProps)(Grid);
export default GameBoard;
import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import styles from './styles/grid-styles';

const Grid = ({
  grid,
  pressHandler
}) => {
  const renderGrid = () => {
    const rows = [];
    const numOfCells = grid.cells.length;
    const squareSize = grid.size;
    let rowCells = [];

    for (let cellIndex = 0; cellIndex < numOfCells; cellIndex++) {
      const cell = grid.cells[cellIndex];
      if (cellIndex % squareSize === 0) {
        rowCells = [];
        //onLayout={(event)=>{console.log(event['_targetInst']['_currentElement']['type']['viewConfig']['NativeProps']['width'])}}
        rows.push(<View style={styles.row} key={rows.length}>{rowCells}</View>);
      }
      const cellContainerStyles = [styles.cellContainer];//, styles.noLeftBorder, styles.noTopBorder];
      if (rows.length === 1) cellContainerStyles.push(styles.noTopBorder);
      if (rows.length === squareSize) cellContainerStyles.push(styles.noBottomBorder);
      if (cellIndex % squareSize === 0) cellContainerStyles.push(styles.noLeftBorder);
      if (cellIndex % squareSize === squareSize - 1) cellContainerStyles.push(styles.noRightBorder);
      // if (rows.length === squareSize) cellContainerStyles.push(styles.noBottomBorder);
      // if (cellIndex % squareSize === squareSize - 1) cellContainerStyles.push(styles.noRightBorder);
      rowCells.push(
        <TouchableOpacity activeOpacity={1} onPress={() => pressHandler(cellIndex) }>
          <View style={cellContainerStyles} key={cellIndex}>
            <Text style={styles.cellContents} >{cell}</Text>
          </View>
        </TouchableOpacity>);
    }

    return rows;
  };

  return (
    <View style={styles.grid}>
      { grid.initialized ? renderGrid() : <Text></Text>}
    </View>
  );
};

Grid.propTypes = {
  grid: React.PropTypes.object.isRequired,
  pressHandler: React.PropTypes.func.isRequired
};

export default Grid;
import React, {Component} from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from './styles/round-button-group-styles.js';
const RoundButtonGroup = ({
  selected,
  buttons,
  selectionHandler
}) => {
  return (
    <View style={styles.list}>
      {buttons.map((button, index) => {
        const selectedItemStyle = selected === button ? styles.selectedItem : styles.unselectedItem;
        const selectedItemTextStyle = selected === button ? styles.selectedItemText : styles.unselectedItemText;
        return (
          <View style={[styles.item, selectedItemStyle]} key={index}>
            <Text
              style={[styles.itemText, selectedItemTextStyle]}
              key={index}
              onPress={(event) => {
                selectionHandler(button);
              } }
              >
              {button}
            </Text>
          </View>
        );
      }) }
    </View>
  );

};

RoundButtonGroup.propTypes = {
  selected: React.PropTypes.string.isRequired,
  buttons: React.PropTypes.array.isRequired,
  selectionHandler: React.PropTypes.func.isRequired
};

export default RoundButtonGroup;
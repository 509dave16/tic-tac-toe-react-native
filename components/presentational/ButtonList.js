import React, {Component} from 'react';
import {
  Text,
  View,
	TextInput
} from 'react-native';
import styles from './styles/button-list-styles.js';

const ButtonList = ({buttons}) => {
  return (
    <View style={styles.list}>
      {
        buttons.map((button, index) => {
          if (button.show) {
            return (
							<View style={styles.item} key={index}>
								<Text style={styles.itemText} onPress={button.pressHandler} key={index}>{button.name}</Text>
							</View>
						);
          }
        })
      }
    </View>
  );
};

ButtonList.propTypes = {
  buttons: React.PropTypes.array.isRequired
};

export default ButtonList;
import React, {Component} from 'react';
import {
  Text,
  View,
	TextInput
} from 'react-native';
import styles from './styles/label-key-value-styles.js';

const LabelKeyValue = ({
  keyValue,
  value
}) => {
  return (
    <View style={styles.pair}>
      <View style={styles.key}>
				<Text style={styles.keyText}>{keyValue}</Text>
			</View>
			<View style={styles.value}>
				<Text style={styles.valueText}>{value}</Text>
			</View>
    </View>
  );
};

LabelKeyValue.propTypes = {
  keyValue: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired
};

export default LabelKeyValue;
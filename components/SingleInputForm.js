import React, {Component} from 'react';
import {
  Text,
  View,
	TextInput
} from 'react-native';
import styles from './styles/single-input-form-styles.js';

console.log(styles);

const SingleInputForm = ({
	show,
	defaultInputText,
	submitHandler
}) => {

	const onSubmit = (event) => {
		const text = event.nativeEvent.text;
    submitHandler(text);
  }
	
	const form = () => {
    return (
			<TextInput style={styles.form} placeholder={defaultInputText ? defaultInputText : ''} onSubmitEditing={onSubmit}/>
    );
  };
	
	if(show) {
		return form();
	} else {
		return (
			<View></View>
		);
	}
}

SingleInputForm.propTypes = {
  show: React.PropTypes.bool.isRequired,
  defaultInputText: React.PropTypes.string,
  submitHandler: React.PropTypes.func.isRequired
};

export default SingleInputForm
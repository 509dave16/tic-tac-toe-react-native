import {blue_frost_light, blue_navy, blue_frost, blue} from './colors.js';
import { StyleSheet } from 'react-native';
import { em } from './units.js';
import Dimensions from 'Dimensions';

const deviceWidth = Dimensions.get('window').width;
const SingleInputFormStyles = StyleSheet.create({
	form: {
		marginBottom: em(0.5),
		fontSize: em(0.75),
		width: deviceWidth - em(4),
	},
});

export default SingleInputFormStyles;
import {blue_frost_light, blue_navy, blue} from './colors.js';
import { StyleSheet } from 'react-native';
import { em } from './units.js';


const KeyValueLabelStyles = StyleSheet.create({
	key: {
		paddingVertical: em(0.3),
		paddingHorizontal: em(0.3),
		backgroundColor: blue_navy,
	},
	value: {
		paddingVertical: em(0.3),
		paddingHorizontal: em(0.3),
		backgroundColor: blue,
	},
	pair: {
		flexDirection: 'row',
		marginBottom: em(0.25),
	},
	keyText: {
		fontSize: em(0.75),
		color: blue_frost_light,
	},
	valueText: {
		fontSize: em(0.75),
		color: blue_frost_light,
	}
});

export default KeyValueLabelStyles;
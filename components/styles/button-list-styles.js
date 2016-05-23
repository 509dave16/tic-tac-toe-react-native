import {blue_navy, blue_frost, blue} from './colors.js';
import { StyleSheet } from 'react-native';
import { em } from './units.js';

const ButtonListStyles = StyleSheet.create({
	list: {
		marginVertical: em(0.5),
		flexDirection: 'row'
	},
	item: {
    borderRadius: em(0.25),
    paddingVertical: em(0.3),
		paddingHorizontal: em(0.3),
		marginHorizontal: em(0.3),
		backgroundColor: blue,
    borderColor: blue_navy,
		borderWidth: em(0.06),
	},
	itemText: {
		color: blue_frost,
		fontSize: em(0.75)
	}
});

export default ButtonListStyles;


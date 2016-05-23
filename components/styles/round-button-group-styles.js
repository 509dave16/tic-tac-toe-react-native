import {blue_frost_light, blue_navy, blue_frost, blue} from './colors.js';
import { StyleSheet } from 'react-native';
import { em } from './units.js';

const RoundButtonGroupStyles = StyleSheet.create({
	list: {
		flexDirection: 'row',
		alignItems: 'center',
		//marginBottom: em(0.25),
		//borderRadius: em(1),
	},
	selectedItem: {
		backgroundColor: blue_navy,
	},
 	unselectedItem: {
		backgroundColor: blue,
		borderColor: blue_navy,
	},
	selectedItemText: {
		color: blue_frost_light,
	},
 	unselectedItemText: {
		color: blue_frost,
	},
	item: {
		paddingVertical: Math.floor(em(0.06125)),
		paddingHorizontal: Math.floor(em(0.3)),
		borderWidth: Math.floor(em(0.06)),
		borderStyle: 'solid',
	},
	itemText: {
		fontSize: em(0.75),
	}
});

export default RoundButtonGroupStyles;



import { blue_baby_dark } from './colors.js'
import { StyleSheet } from 'react-native';

const rootStyles = StyleSheet.create({
	container: {
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	background: {
		flex: 1,
		backgroundColor: blue_baby_dark,
	}
});

export default rootStyles;
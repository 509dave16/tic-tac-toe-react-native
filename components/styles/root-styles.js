import { blue_baby_dark } from './colors.js'
import { StyleSheet } from 'react-native';

const rootStyles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: blue_baby_dark,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: 'red',
	}
});

export default rootStyles;
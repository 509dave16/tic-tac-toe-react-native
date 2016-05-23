import {blue_frost_light} from './colors.js';
import { StyleSheet } from 'react-native';
import { em } from './units.js';
const gridStyles = StyleSheet.create({
    cellContents: {
        color: blue_frost_light,
        fontSize: em(3),
        fontWeight: "800",
    },
    cellContainer: {
        paddingHorizontal: em(0.75),
        width: em(3.75),
        height: em(3.75),
        borderWidth: em(0.15),
        borderStyle: 'solid',
        borderColor: blue_frost_light,
    },
    noLeftBorder: {
        borderLeftWidth: 0
    },
    noRightBorder: {
        borderRightWidth: 0
    },
    noTopBorder: {
        borderTopWidth: 0
    },
    noBottomBorder: {
        borderBottomWidth: 0
    },
    grid: {
        flex: 1,
        marginTop: 12,
        marginBottom: 12,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    row: {
        flexDirection: 'row',
    }
});

export default gridStyles;
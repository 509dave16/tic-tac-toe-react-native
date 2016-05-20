import {blue_frost_light} from './colors.js';
import { StyleSheet } from 'react-native';
import { em } from './units.js';
const gridStyles = StyleSheet.create({
    cellContents: {
        color: blue_frost_light,
        fontSize: em(4),
        fontWeight: "800",
        //textAlign: 'center',
    },
    cellContainer: {
        paddingLeft: em(1),
        paddingRight: em(1),
        // width: em(5),
        // height: em(5),
        borderWidth: em(0.25),
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
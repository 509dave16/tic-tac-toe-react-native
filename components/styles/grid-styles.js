import {blue_frost_light} from './colors.js';
import { StyleSheet } from 'react-native';
const gridStyles = StyleSheet.create({
    cellContents: {
        color: blue_frost_light,
        fontSize: 64,
        fontWeight: "800",
        //textAlign: 'center',
    },
    cellContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        borderWidth: 4,
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
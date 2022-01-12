import { StyleSheet } from "react-native";

import { theme } from '../../Components/Global/Styles/theme';

export const styles = StyleSheet.create({

    bar: {
        backgroundColor: theme.colors.primary,
    },

    text: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.white,
        fontSize: 24,
    },

    containerInput: {
        backgroundColor: theme.colors.white,
        borderColor: theme.colors.primary,
        flexDirection: 'row',
        marginHorizontal: 16,
        borderRadius: 10,
        borderWidth: 1,
        flex: 1,
    },

    input: {
        marginHorizontal: 8,
        flex: 1,
    },
})
import { StyleSheet, Dimensions } from "react-native";
import { theme } from '../../Components/Global/Styles/theme';

const screenHeight = Dimensions.get("screen").height;

export const styles = StyleSheet.create({
    bar: {
        backgroundColor: theme.colors.primary,
    },

    containerInput: {
        borderColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
    },

    text: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.white,
        marginBottom: 60,
        marginTop: 60,
        fontSize: 30,
        alignItems: 'center'
    },

    content: {
        backgroundColor: theme.colors.white,
        height: screenHeight,
        paddingTop: 40
    },

    input: {
        marginHorizontal: 5,
        flex: 1,
    },

    buttonContained: {
        marginBottom: 10,
        marginHorizontal: 40,
        marginTop: 40
    }
})
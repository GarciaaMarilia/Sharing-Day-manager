import { StyleSheet } from "react-native";
import { theme } from '../../Components/Global/Styles/theme';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.primary,
    },

    text: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 24,
    },

    textTwo: {
        fontFamily: theme.fonts.title700,
        marginHorizontal: 24,
        marginTop: 20,
        fontSize: 24,
    },

    content: {
        backgroundColor: theme.colors.white,
        marginHorizontal: 20,
        marginVertical: 40,
        borderRadius: 20,
        flex: 1
    },

    contentTwo: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentThree: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    bar: {
        backgroundColor: theme.colors.white,
        flexDirection: 'row',
        marginTop: 40,
        paddingHorizontal: 16,
    },

    avatar: {
        borderColor:theme.colors.primary,
        borderRadius: 400,
        borderWidth: 3,
        margin: 10,
        height: 70,
        width: 70,
    },

    image: {
        marginTop: 20,
        width: 180,
        height: 180,
    },

    date: {
        fontFamily: theme.fonts.title700,
        textAlign: 'center',
        fontSize: 20,
        marginTop: 5,
    },

    title: {
        fontFamily: theme.fonts.title700,
        textAlign: 'center',
        marginTop: 5,
        fontSize: 24,
    },

    substance: {
        fontFamily: theme.fonts.text500,
        textAlign: 'justify',
        marginVertical: 10,
        marginHorizontal: 16,
    },

    input: {
        borderColor: theme.colors.primary,
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 20
    },
})
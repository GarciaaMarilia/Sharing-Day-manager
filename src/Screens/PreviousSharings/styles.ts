import { StyleSheet } from "react-native";
import { theme } from '../../Components/Global/Styles/theme';

export const styles = StyleSheet.create({
    content: {
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        marginHorizontal: 20,
        alignItems: 'center',
        marginVertical: 40,
        borderRadius: 20,
    },

    image: {
        height: 180,
        width: 220,
    },

    date: {
        fontFamily: theme.fonts.title700,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 20,
    },

    title: {
        fontFamily: theme.fonts.title700,
        textAlign: 'center',
        marginTop: 5,
        fontSize: 24,
    },

    contentTwo: {
        flexDirection: 'row',
        marginHorizontal: 50,
        alignItems: 'center'
    },

    avatar: {
        borderColor: theme.colors.primary,
        borderRadius: 400,
        borderWidth: 3,
        margin: 10,
        height: 70,
        width: 70,
    },

    textTwo: {
        fontFamily: theme.fonts.title700,
        marginHorizontal: 24,
        marginTop: 20,
        fontSize: 24,
    },

    bar: {
        backgroundColor: theme.colors.white,
        paddingHorizontal: 16,
        flexDirection: 'row',
        marginTop: 40,
    },

    text: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.primary,
        marginHorizontal: 30,
        marginTop: 20,
        fontSize: 24,
    },
})





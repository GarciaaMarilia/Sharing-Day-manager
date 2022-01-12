import { StyleSheet } from "react-native";
import { theme } from '../../Components/Global/Styles/theme';

export const styles = StyleSheet.create({
    image: {
        alignItems: 'center',
        marginTop: 80, 
        marginBottom: 40
    },

    content: {
        backgroundColor: theme.colors.white,
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        flex: 1
    },

    subtitle: {
        fontFamily: theme.fonts.title500,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 18,
    },

    title: {
        fontFamily: theme.fonts.title700,
        textAlign: 'center',
        marginBottom: 40,
        fontSize: 28,
    },

    containerInput:{
        borderColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 16,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        flex: 1,
    },

    input: {
        marginHorizontal: 5,
        flex: 1,
    },
});
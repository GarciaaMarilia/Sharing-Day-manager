import { StyleSheet } from "react-native";
import { theme } from '../../Components/Global/Styles/theme';

export const styles = StyleSheet.create({

    content: {
        backgroundColor: theme.colors.white,
        flex: 1,
    },

    avatar: {
        borderColor: theme.colors.primary,
        borderRadius: 400,
        marginBottom: 20,
        borderWidth: 3,
        marginTop: 80,
        height: 160,
        width: 160,
    },

    image: {
        alignItems: 'center',
    },

    input: {
        borderColor: theme.colors.primary,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 1,
        padding: 10,
        flex: 1,
    }
});
import { StyleSheet } from 'react-native';

import { theme } from '../../Components/Global/Styles/theme';

export const styles = StyleSheet.create({
  
    avatar: {
        borderColor:theme.colors.primary,
        borderRadius: 400,
        borderWidth: 3,
        margin: 10,
        height: 50,
        width: 50,
    }
});
import React, { useState } from 'react';
import {
    ScrollView,
    TextInput,
    Alert,
    Image,
    View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-paper';

import { theme } from '../../Components/Global/Styles/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { styles } from './styles';


export function Profile() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [conpass, setConPass] = useState('');

    const navigation = useNavigation();

    function handleRefresh() {
        Alert.alert("Dados Atualizados!");
    }

    function handleLogOut() {
        navigation.navigate('SignIn');
    }

    return (
        <View style={styles.content}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.image}>
                    <Image
                        source={{ uri: 'https://github.com/GarciaaMarilia.png' }}
                        style={styles.avatar}
                    />
                </View>

                <View style={{ flex: 1 }}>
                    <View style={styles.input}>

                        <MaterialIcons
                            name="person-outline"
                            size={20}
                            color={theme.colors.bottom}
                        />

                        <TextInput
                            value={name}
                            autoCorrect={false}
                            placeholder="Nome"
                            placeholderTextColor={theme.colors.bottom}
                            underlineColorAndroid="transparent"
                            onChangeText={name => setName(name)}
                            style={{
                                marginHorizontal: 5,
                                flex: 1,
                            }}
                        />
                    </View>

                    <View style={styles.input}>

                        <MaterialIcons
                            name="alternate-email"
                            size={20}
                            color={theme.colors.bottom}
                        />

                        <TextInput
                            value={email}
                            autoCorrect={false}
                            placeholder="E-mail"
                            placeholderTextColor={theme.colors.bottom}
                            underlineColorAndroid="transparent"
                            onChangeText={email => setEmail(email)}
                            style={{
                                marginHorizontal: 5,
                                flex: 1,
                            }}
                        />
                    </View>

                    <View style={styles.input}>

                        <MaterialIcons
                            name="lock-open"
                            size={20}
                            color={theme.colors.bottom}
                        />

                        <TextInput
                            value={password}
                            autoCorrect={false}
                            placeholder="Senha"
                            placeholderTextColor={theme.colors.bottom}
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            onChangeText={password => setPassword(password)}
                            style={{
                                marginHorizontal: 5,
                                flex: 1,
                            }}
                        />
                    </View>

                    <View style={styles.input}>

                        <MaterialIcons
                            name="lock-open"
                            size={20}
                            color={theme.colors.bottom}
                        />

                        <TextInput
                            value={conpass}
                            autoCorrect={false}
                            placeholder="Confirme a Senha"
                            placeholderTextColor={theme.colors.bottom}
                            underlineColorAndroid="transparent"
                            secureTextEntry={true}
                            onChangeText={conpass => setConPass(conpass)}
                            style={{
                                marginHorizontal: 5,
                                flex: 1,
                            }}
                        />
                    </View>

                    <Button
                        mode="contained"
                        color={theme.colors.bottom}
                        style={{
                            marginHorizontal: 20,
                            marginTop: 20,
                            borderRadius: 10,
                        }}
                        onPress={handleRefresh}
                    >
                        Atualizar Dados
                    </Button>

                    <Button
                        mode="contained"
                        color={theme.colors.error}
                        style={{
                            marginHorizontal: 20,
                            marginTop: 20,
                            borderRadius: 10,
                            marginBottom: 20,
                        }}
                        onPress={handleLogOut}
                    >
                        Sair
                    </Button>
                </View>
            </ScrollView>
        </View>
    )
}
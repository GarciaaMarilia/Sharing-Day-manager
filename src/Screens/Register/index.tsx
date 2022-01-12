import React, { useState } from 'react';
import {
    ScrollView,
    TextInput,
    Alert,
    View,
    Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import {
    Button,
    Appbar
} from 'react-native-paper';

import { styles } from './styles';
import { theme } from '../../Components/Global/Styles/theme';

import { MaterialIcons } from '@expo/vector-icons';

export function Register() {
    const [password, setPassword] = useState('');
    const [conpass, setConPass] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('SignIn');
    }

    function handleRegister(){
        Alert.alert("Usuário Cadastrado!", "Confira seu e-mail.");
    }

    return (
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View>
                    <Appbar.Header style={styles.bar}>
                        <Appbar.BackAction onPress={handleSignIn} />
                        <Text style={styles.text}>
                            Cadastre-se
                        </Text>
                    </Appbar.Header>

                    <View style={styles.content}>

                        <View style={styles.containerInput}>
                            <MaterialIcons
                                name="person-outline"
                                size={20}
                                color={theme.colors.bottom}
                            />

                            <TextInput
                                style={styles.input}
                                value={name}
                                autoCorrect={false}
                                placeholder="Nome"
                                placeholderTextColor={theme.colors.bottom}
                                underlineColorAndroid="transparent"
                                onChangeText={name => setName(name)}
                            />
                        </View>

                        <View style={styles.containerInput}>

                            <MaterialIcons
                                name="alternate-email"
                                size={20}
                                color={theme.colors.bottom}
                            />

                            <TextInput
                                style={styles.input}
                                value={email}
                                autoCorrect={false}
                                placeholder="E-mail"
                                placeholderTextColor={theme.colors.bottom}
                                underlineColorAndroid="transparent"
                                onChangeText={email => setEmail(email)}
                            />
                        </View>

                        <View style={styles.containerInput}>

                            <MaterialIcons
                                name="lock-open"
                                size={20}
                                color={theme.colors.bottom}
                            />

                            <TextInput
                                style={styles.input}
                                value={password}
                                autoCorrect={false}
                                placeholder="Senha"
                                placeholderTextColor={theme.colors.bottom}
                                underlineColorAndroid="transparent"
                                secureTextEntry={true}
                                onChangeText={password => setPassword(password)}
                            />
                        </View>

                        <View style={styles.containerInput}>

                            <MaterialIcons
                                name="lock-open"
                                size={20}
                                color={theme.colors.bottom}
                            />

                            <TextInput
                                style={styles.input}
                                value={conpass}
                                autoCorrect={false}
                                placeholder="Confirme a Senha"
                                placeholderTextColor={theme.colors.bottom}
                                underlineColorAndroid="transparent"
                                secureTextEntry={true}
                                onChangeText={conpass => setConPass(conpass)}
                            />
                        </View>

                        <Button
                            mode="contained"
                            color={theme.colors.bottom}
                            style={styles.buttonContained}
                            onPress={handleRegister}
                        >
                            Cadastrar
                        </Button>

                        <Button
                            color={theme.colors.bottom}
                            onPress={handleSignIn}
                        >
                            Já tenho conta
                        </Button>
                    </View>
                </View>
            </ScrollView>
    )
}
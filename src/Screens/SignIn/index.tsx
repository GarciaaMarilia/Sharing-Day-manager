import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TextInput,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-paper';

import ConferenceImg from '../../../assets/conference.png';

import { theme } from '../../Components/Global/Styles/theme';
import { Background } from '../../Components/Background';
import { styles } from './styles';

import { MaterialIcons } from '@expo/vector-icons';

export function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('TabRoutes');
    }

    function handleRegister() {
        navigation.navigate('Register');
    }

    return (
        <Background>
            <View style={{ flex: 1 }}>
                <ScrollView showsVerticalScrollIndicator={false}>

                    <View style={styles.image}>
                        <Image source={ConferenceImg} />
                    </View>

                    <View style={styles.content}>

                        <Text style={styles.subtitle}>
                            Bem vindo ao,
                        </Text>

                        <Text style={styles.title}>
                            Sharing Day Manager
                        </Text>

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
                                keyboardType="email-address"
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
                                placeholder="Senha"
                                placeholderTextColor={theme.colors.bottom}
                                secureTextEntry={true}
                                onChangeText={password => setPassword(password)}
                            />
                        </View>

                        <Button
                            color={theme.colors.bottom}
                            style={{
                                marginLeft: 150,
                                marginBottom: 30,
                                marginTop: -14
                            }}
                        >
                            Esqueci minha senha
                        </Button>

                        <Button
                            mode="contained"
                            color={theme.colors.bottom}
                    
                            style={{
                                marginHorizontal: 20,
                                marginBottom: 10,
                            }}
                            onPress={handleSignIn}
                        >
                            Entrar
                        </Button>

                        <Button
                            color={theme.colors.bottom}
                            style={{ marginBottom: 100 }}
                            onPress={handleRegister}
                        >
                            Não tenho conta
                        </Button>
                    </View>
                </ScrollView>
            </View>
        </Background>
    )
}
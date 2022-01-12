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

import { MaterialIcons, Fontisto } from '@expo/vector-icons';

import { theme } from '../../Components/Global/Styles/theme';
import { Background } from '../../Components/Background';
import { styles } from './styles';


export function NewSharing() {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const navigation = useNavigation();

    function handleSignIn() {
        navigation.navigate('TabRoutes');
    }

    function handleSaveSharing() {
        Alert.alert("Sharing Cadastrado!");
    }

    return (
        <Background>
            <ScrollView>
                <View>
                    <Appbar.Header style={styles.bar}>
                        <Appbar.BackAction onPress={handleSignIn} />
                        <Text style={styles.text}>
                            Novo Sharing
                        </Text>
                    </Appbar.Header>

                    <View style={[
                        styles.containerInput,
                        {
                            alignItems: 'center',
                            marginTop: 40,
                            padding: 10,
                        }
                    ]}
                    >
                        <MaterialIcons
                            color={theme.colors.bottom}
                            name="account-tree"
                            size={20}
                        />

                        <TextInput
                            placeholderTextColor={theme.colors.bottom}
                            onChangeText={title => setTitle(title)}
                            style={styles.input}
                            placeholder="Título"
                        />
                    </View>


                    <View style={[
                        styles.containerInput,
                        {
                            alignItems: 'center',
                            marginTop: 20,
                            padding: 10,
                        }
                    ]}
                    >

                        <Fontisto
                            color={theme.colors.bottom}
                            name="date"
                            size={20}
                        />

                        <TextInput
                            placeholderTextColor={theme.colors.bottom}
                            onChangeText={date => setDate(date)}
                            style={styles.input}
                            placeholder="Data"
                        />
                    </View>


                    <View style={[
                        styles.containerInput,
                        {
                            alignItems: 'flex-start',
                            marginBottom: 40,
                            marginTop: 20,
                            height: 200,
                            padding: 10,
                        }
                    ]}
                    >

                        <MaterialIcons
                            color={theme.colors.bottom}
                            name="description"
                            size={22}
                        />

                        <TextInput
                            onChangeText={description => setDescription(description)}
                            placeholderTextColor={theme.colors.bottom}
                            placeholder="Descrição"
                            style={styles.input}
                            multiline={true}
                        />
                    </View>

                    <Button
                        color={theme.colors.bottom}
                        onPress={handleSaveSharing}
                        mode="contained"
                        style={{
                            marginHorizontal: 20,
                            marginBottom: 10,
                        }}
                    >
                        Cadastrar Tema
                    </Button>
                </View>
            </ScrollView>
        </Background>
    )
}
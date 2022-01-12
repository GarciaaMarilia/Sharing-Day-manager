import React, { useEffect, useState } from 'react';
import {
    View,
    Image,
    Text,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'react-native-paper';

import { Background } from '../../Components/Background';
import { Avatar } from '../../Components/Avatar';

import { styles } from './styles';
import { SharingProps, useSharings } from '../../Providers/SharingsProvider';


export function NextSharings() {

    const { sharings } = useSharings();

    const [nextSharing, setNextSharing] = useState<SharingProps>({} as SharingProps);

    useEffect(() => {

        if (sharings && sharings.length > 0) {
            setNextSharing(sharings[0]);
        }
    }, [sharings])


    const navigation = useNavigation();

    function handleNewSharing() {
        navigation.navigate('NewSharing');
    }

    return (
        <Background>
            {!!nextSharing?.id ? (<><View style={styles.bar}>
                <Avatar
                    urlImage="https://github.com/Garciaamarilia.png"
                />
                <Text style={styles.text}>
                    {nextSharing.name}
                </Text>

            </View>
                <View style={styles.content}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.contentTwo}>
                            <Image
                                source={nextSharing.image}
                                style={styles.image}
                                resizeMode='stretch'
                            />

                            <Text style={styles.date}>
                                {nextSharing.date}
                            </Text>

                            <View style={styles.contentThree}>
                                <Image
                                    source={nextSharing.avatar}
                                    style={styles.avatar}
                                />

                                <Text style={styles.textTwo}>
                                    {nextSharing.name}
                                </Text>
                            </View>

                            <Text style={styles.title}>
                                {nextSharing.title}
                            </Text>

                            <Text style={styles.substance}>
                                {nextSharing.substance}
                            </Text>

                            <Button
                                mode="contained"
                                color="#07446B"
                                style={styles.input}
                                onPress={handleNewSharing}
                            >
                                Cadastrar Novo Tema
                            </Button>
                        </View>
                    </ScrollView>
                </View></>) : null}
        </Background >
    )
}
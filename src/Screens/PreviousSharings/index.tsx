import React from 'react';
import {
    View,
    Image,
    Text,
    FlatList,
} from 'react-native';

import { useSharings, SharingProps } from '../../Providers/SharingsProvider';
import { Background } from '../../Components/Background';
import { Avatar } from '../../Components/Avatar';

import { styles } from './styles';

export function PreviousSharing() {

    const { sharings } = useSharings();

    function renderItem(item: SharingProps) {
        return (
            <View style={styles.content}>
                <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode='stretch'
                />

                <Text style={styles.date}>
                    {item.date}
                </Text>

                <Text style={styles.title}>
                    {item.title}
                </Text>

                <View style={styles.contentTwo}>
                    <Image
                        source={item.avatar}
                        style={styles.avatar}
                    />

                    <Text style={styles.textTwo}>
                        {item.name}
                    </Text>
                </View>
            </View>
        );
    }


    return (
        <Background>
            <View style={styles.bar}>
                <Avatar
                    urlImage="https://github.com/Garciaamarilia.png"
                />
                <Text style={styles.text}>
                    {sharings[0].name}
                </Text>
            </View>
            <FlatList
                data={sharings}
                renderItem={({ item }) => renderItem(item)}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            />
        </Background >
    )
}
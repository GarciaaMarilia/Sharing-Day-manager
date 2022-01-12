import React from 'react';

import { Image } from 'react-native';

import { styles } from './styles';

type Props = {
    urlImage: string;
}

export function Avatar({ urlImage }: Props) {
    return (
        <Image
            source={{ uri: urlImage }}
            style={styles.avatar}
        />
    )
}
import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';

const SmallGameCard = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                resizeMode='cover'
                style={styles.backgroundImage}
                source={{ uri: `${item.background_image}` }}
            />
            <Text
                style={styles.title}
            >{item.name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 150,
        margin: 8,
        marginRight: 16
    },
    backgroundImage: {
        height: 250,
        width: 150,
        borderRadius: 8
    },
    title: {
        color: '#fff',
        fontWeight: 500,
        fontSize: 16,
        padding: 4
    }
});

export default SmallGameCard;
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import React from 'react';

const SmallGameCard = ({ item, navigation }) => {
    return (
        <Pressable
            onPress={() => navigation.navigate('Game', { screenshots: item.short_screenshots, id: item.id })}
        >
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
        </Pressable>

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
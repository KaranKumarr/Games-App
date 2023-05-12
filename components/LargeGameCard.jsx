import { Image, View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const LargeGameCard = ({ item }) => {

    // const windowWidth = Dimensions.get('window').width;

    return (
        <View style={styles.container}>
            <Image
                style={styles.backgroundImage}
                source={{ uri: `${item.background_image}` }}
            />
            <Text style={styles.title}>{item.name}</Text>
            <LinearGradient
                style={styles.backgroundShadow}
                colors={['rgba(0,0,0,0.03)', 'rgba(0,0,0,0.02)', 'rgba(0,0,0,0.01)', 'rgba(0,0,0,0.75)']}
            >

            </LinearGradient>
        </View >

    );
};

const styles = StyleSheet.create({

    container: {
        height: 200,
        flexDirection: 'row',
        margin: 8,
        width: Dimensions.get('window').width,
        alignItems: 'center',
        position: 'relative'
    },
    backgroundImage: {
        width: null,
        flex: 1,
        height: 200,
        alignSelf: 'stretch',
        borderRadius: 12,
        // flexGrow: 1
    },
    title: {
        position: 'absolute',
        color: '#fff',
        fontSize: 16,
        bottom: 0,
        left: 9,
        padding: 8,
        fontWeight: 500,
        zIndex: 50
    },
    backgroundShadow: {
        height: 200,
        width: Dimensions.get('window').width,
        position: 'absolute',
        zIndex: 20,
        borderRadius: 12,
    }
});

export default LargeGameCard;
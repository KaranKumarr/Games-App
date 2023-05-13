import { Image, View, Text, StyleSheet, Dimensions, Pressable } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const LargeGameCard = ({ item, navigation }) => {


    return (
        <Pressable
            onPress={() =>
                navigation.navigate('Game', { screenshots: item.short_screenshots, id: item.id })
            }
        >
            <View
                style={styles.container}>
                <Image
                    resizeMode='cover'
                    style={styles.backgroundImage}
                    source={{ uri: `${item.background_image}` }}
                />
                <Text style={styles.title}>{item.name}</Text>
                <LinearGradient
                    style={styles.backgroundShadow}
                    colors={['rgba(0,0,0,0.03)', 'rgba(0,0,0,0.02)', 'rgba(0,0,0,0.01)', 'rgba(0,0,0,0.75)']}
                >

                </LinearGradient>
            </View>
        </Pressable>
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
        borderRadius: 16,
        // flexGrow: 1
    },
    title: {
        color: '#fff',
        fontWeight: 500,
        fontSize: 16,
        position: 'absolute',
        bottom: 0,
        left: 9,
        padding: 8,
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
import { ActivityIndicator, Image, StyleSheet, Text, StatusBar, View, ScrollView, Dimensions, FlatList, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from "react-native-vector-icons/Ionicons";
import moment from 'moment';
import axios from '../api/axios';
import { REACT_APP_RAWG_KEY } from "@env";


const GameDetailsScreen = ({ navigation, route }) => {

    const [gameDetails, setGameDetails] = useState({});

    let screenshots = route.params.screenshots;
    const gameId = route.params.id;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`/games/${gameId}`, {
                    params: {
                        key: REACT_APP_RAWG_KEY
                    }
                });

                setGameDetails(data);

            } catch (error) {
                console.log(error);
            }

        };
        fetchData();
    }, []);

    const date = moment(gameDetails.released).format('DD-MMM-YYYY');

    const handleSearchSubmit = async (genreSelect) => {
        const genre = genreSelect;
        navigation.navigate('Search', {
            query: {
                type: 'genre',
                query: genre
            }
        });
    };

    return (
        <>
            <SafeAreaView style={styles.mainBody}>

                <ScrollView>
                    <View style={styles.backgroundImageContainer}>

                        <FlatList
                            data={screenshots}
                            renderItem={({ item }) => (
                                <Image
                                    source={{ uri: item.image }}
                                    style={styles.backgroundImage} />)}
                            keyExtractor={item => item.id}
                            horizontal
                            pagingEnabled
                            snapToAlignment="center"
                            showsHorizontalScrollIndicator={false}
                        />

                    </View>

                    <View style={styles.container}>

                        {/* Header cards */}
                        <View style={styles.gameHeader}>
                            <View style={{ flexDirection: 'row', gap: 8 }}>

                                <View style={styles.gameHeaderCards}>
                                    {/* <Metascore /> */}
                                    <Image
                                        style={{ height: 16, width: 16 }}
                                        source={require('../assets/metascore.png')}
                                    />
                                    <Text style={styles.gameHeaderInfo}>{gameDetails.metacritic}</Text>
                                </View>

                                <View style={styles.gameHeaderCards}>
                                    <Icon
                                        name="star"
                                        color="#f1c40f"
                                        size={16} />
                                    <Text style={styles.gameHeaderInfo}>{gameDetails.rating}</Text>
                                </View>

                            </View>
                            <View>

                                <View style={styles.gameHeaderCards}>
                                    <Text style={styles.gameHeaderInfo}>
                                        <Icon
                                            name='calendar'
                                            size={16}
                                            color={'#82E9A7'}
                                        />
                                        {moment(gameDetails.released).format('DD-MMM-YYYY')}
                                    </Text>
                                </View>

                            </View>
                        </View>

                        <View style={styles.gameInfo}>
                            <Text
                                style={styles.title}
                            >
                                {gameDetails.name}
                            </Text>
                            <Text style={styles.description}>
                                {gameDetails.description_raw}
                            </Text>
                        </View>

                        <View style={styles.gameInfo}>

                            <Text style={styles.gameInfoHeading}>
                                Platforms
                            </Text>

                            <View style={styles.gamePlatformLinkSection}>
                                {gameDetails.platforms?.map((item, i) => {
                                    return (
                                        <Pressable key={item.platform.id} onPress={() => {
                                            navigation.navigate('Search', {
                                                query: {
                                                    type: 'platform',
                                                    query: item.platform.id
                                                }
                                            });
                                        }}>
                                            <Text style={styles.gamePlatformLink}>
                                                {item.platform.name}{i === gameDetails.platforms.length - 1 ? '' : ','}
                                            </Text>
                                        </Pressable>
                                    );
                                })}
                            </View>

                        </View>


                        {/* Genres Section */}
                        <View style={styles.gameInfo}>

                            <Text style={styles.gameInfoHeading}>
                                Genres
                            </Text>

                            <View style={styles.genres}>

                                {gameDetails.genres?.map((item, i) => {
                                    return (
                                        <Pressable onPress={() => {
                                            handleSearchSubmit(item.name.toLowerCase());
                                        }} style={styles.genreCard} key={i}>
                                            <Text style={styles.genreTitle} >{item.name}</Text>
                                        </Pressable>);
                                })}

                            </View>
                        </View>


                        {/* Publisher Section */}
                        <View style={styles.gameInfo}>
                            <Text style={styles.gameInfoHeading}>
                                Published By
                            </Text>
                            <View style={styles.genres}>
                                {gameDetails.publishers?.map((item, i) => {
                                    return (
                                        <Text style={styles.gameInfoText} key={i}>
                                            {item.name}{i === gameDetails.publishers.length - 1 ? '' : ','}
                                        </Text>
                                    );
                                })}
                            </View>
                        </View>

                    </View>

                </ScrollView>

            </SafeAreaView>
        </>
    );
};

export default GameDetailsScreen;

const styles = StyleSheet.create({
    mainBody: {
        backgroundColor: '#001113',
        flexGrow: 1,
    },
    backgroundImageContainer: {
        height: 250,
        flexDirection: 'row',
        width: Dimensions.get('window').width,
        alignItems: 'center',
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        flex: 1,
        height: 250,
        alignSelf: 'stretch',
    },
    container: {
        paddingHorizontal: 8,
        paddingVertical: 16
    },
    gameHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    gameHeaderCards: {
        backgroundColor: '#232c2d',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8,
        gap: 4,
        alignItems: 'center',
        flexDirection: 'row'
    },
    gameHeaderInfo: {
        color: '#fff',
        fontSize: 14,
        textTransform: 'uppercase'
    },
    gameInfo: {
        paddingVertical: 8
    },
    title: {
        fontSize: 32,
        color: '#fff',
        fontWeight: 600,
        paddingVertical: 8,
        letterSpacing: 2,
    },
    description: {
        color: '#E9FDFF',
        paddingVertical: 4,
        fontSize: 12,
        letterSpacing: 0.75
    },
    gameInfoHeading: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 600
    },
    gamePlatformLinkSection: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6,
        paddingVertical: 4
    },
    gamePlatformLink: {
        color: '#82E9A7',
        fontWeight: 500
    },

    genres: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        paddingVertical: 8
    },
    genreCard: {
        backgroundColor: '#232c2d',
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 8
    },
    genreTitle: {
        color: '#fff',
        fontSize: 16,
        textTransform: 'capitalize'
    },
    gameInfoText: {
        color: '#fff',
        paddingHorizontal: 4,
        fontSize: 16,
        fontWeight: 500,
        opacity: 0.8
    }

});
import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import SmallGameCard from '../components/SmallGameCard';
import axios from '../api/axios';
import { REACT_APP_RAWG_KEY } from "@env";

const SearchGamesScreen = ({ navigation, route }) => {

    const [games, setGames] = useState([]);

    const query = (route.params.query);

    useEffect(() => {

        console.log(query);


        const fetchData = async () => {

            params = {
                key: REACT_APP_RAWG_KEY,
                page: 1,
                page_size: 20,
                exclude_additions: true,
            };

            if (query.type === 'search') {
                params = {
                    key: REACT_APP_RAWG_KEY,
                    page: 1,
                    page_size: 20,
                    exclude_additions: true,
                    search_precise: true,
                    search: query.query
                };
            }

            try {

                const { data } = await axios.get('/games', {
                    params: params
                });

                console.log(data.results[0].name);


                // Sorting upcoming games by suggestion count
                const sortedUpcomingGames = data.results.sort((a, b) => a.ratings_count < b.ratings_count ? 1 : -1);


                setGames(sortedUpcomingGames);

                console.log(games.length);

            } catch (error) {
                console.log(error);
            }
        };

        fetchData();

        // console.log(games);

    }, [query]);

    return (

        <SafeAreaView style={styles.mainBody}>
            <SearchBar navigation={navigation} />

            <ScrollView>

                <View style={styles.SearchedGamesList}>

                    {games?.map((item, i) => {
                        if (item.background_image)
                            return (
                                <SmallGameCard item={item} key={i} navigation={navigation} />
                            );
                    })}

                </View>

            </ScrollView>

        </SafeAreaView>
    );
};

export default SearchGamesScreen;

const styles = StyleSheet.create({
    mainBody: {
        backgroundColor: '#001113',
        flexGrow: 1,
    },
    SearchedGamesList: {
        paddingVertical: 16,
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 1,
        width: Dimensions.get('window').width,
        justifyContent: 'center'
    }
});
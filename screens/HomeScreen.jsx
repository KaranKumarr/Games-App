import { SafeAreaView, View, Text, Button, Pressable, Image, TextInput, FlatList, StyleSheet, StatusBar, ScrollView, Platform, TouchableOpacity } from "react-native";
import * as React from "react";
import moment from "moment";
import SearchBar from "../components/SearchBar";
import LargeGameCard from "../components/LargeGameCard";
import SmallGameCard from "../components/SmallGameCard";
import { REACT_APP_RAWG_KEY } from "@env";
import axios from "../api/axios";

export default function Home({ navigation }) {

  const [upcomingGames, setUpcomingGames] = React.useState([]);
  const [topGames, setTopGames] = React.useState([]);
  const [genres, setGenres] = React.useState([]);

  React.useEffect(() => {

    const fetchData = async () => {

      // dates to get coming soon games
      const currentDate = moment().format('YYYY-MM-DD');
      const oneMonthLater = moment().add(1, 'months').format('YYYY-MM-DD');

      try {
        const upcomingGames = await axios.get('/games', {
          params: {
            key: REACT_APP_RAWG_KEY,
            page: 1,
            page_size: 5,
            ordering: '-release',
            exclude_additions: true,
            dates: currentDate + ',' + oneMonthLater
          }
        });

        // Sorting upcoming games by suggestion count
        const sortedUpcomingGames = upcomingGames.data.results.sort((a, b) => a.suggestions_count < b.suggestions_count ? 1 : -1);


        const topGamesResult = await axios.get('/games', {
          params: {
            key: REACT_APP_RAWG_KEY,
            page: 1,
            page_size: 20,
            ordering: '-rating',
            exclude_additions: true,
            metacritic: '90,100'
          }
        });

        const genresResult = await axios.get('/genres', {
          params: {
            key: REACT_APP_RAWG_KEY,
            ordering: 'name'
          }
        });

        setTopGames(topGamesResult.data.results);
        setUpcomingGames(sortedUpcomingGames);
        setGenres(genresResult.data.results);

      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

  }, []);


  return (
    <SafeAreaView style={styles.homeScreen}>
      <ScrollView>

        <SearchBar navigation={navigation} />


        {/* Releasing Soon Section */}
        <SafeAreaView style={styles.gamesSection}>

          <Text style={styles.gamesSectionHeading}>Releasing Soon</Text>

          <View>

            <FlatList
              data={upcomingGames}
              renderItem={({ item }) => <LargeGameCard navigation={navigation} item={item} />}
              keyExtractor={item => item.id}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
            />

          </View>

        </SafeAreaView>

        {/* Top Rated Games Section */}
        <SafeAreaView style={styles.gamesSection}>

          <Text style={styles.gamesSectionHeading}>Top Rated Games</Text>

          <View>

            <FlatList
              data={topGames}
              renderItem={({ item }) => <SmallGameCard item={item} navigation={navigation} />}
              keyExtractor={item => item.id}
              horizontal
              pagingEnabled
              snapToAlignment="center"
              showsHorizontalScrollIndicator={false}
            />

          </View>

        </SafeAreaView>

        <Text style={styles.gamesSectionHeading}>Genres</Text>

        {/* Genres Section */}
        <SafeAreaView style={styles.genres}>

          {genres.map((item, i) => {
            return (
              <TouchableOpacity onPress={() => {
                navigation.navigate('Search', {
                  query: {
                    type: 'genre',
                    query: item.id
                  }
                });
              }} style={styles.genreCard} key={i}>
                <Text style={styles.genreTitle} >{item.name}</Text>
              </TouchableOpacity>);
          })}

        </SafeAreaView>

      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  homeScreen: {
    backgroundColor: '#0B1416',
    flexGrow: 1
  },


  gamesSection: {
    padding: 8,
    paddingBottom: 0,
  },
  gamesSectionHeading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 600,
    padding: 8
  },

  genres: {
    paddingHorizontal: 8,
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
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
  }

});

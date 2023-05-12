import { SafeAreaView, View, Text, Button, Pressable, Image, TextInput, FlatList, StyleSheet, StatusBar } from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import LargeGameCard from "../components/LargeGameCard";
import SmallGameCard from "../components/SmallGameCard";

export default function Home() {

  const [upcomingGames, setUpcomingGames] = React.useState([]);

  const [topGames, setTopGames] = React.useState([]);


  const [searchBarText, setSearchBarText] = React.useState("");

  React.useEffect(() => {

    const upcomingGames = require('../upcomingGames.json');

    const sortedUpcomingGames = upcomingGames.results.sort((a, b) => a.suggestions_count < b.suggestions_count ? 1 : -1);

    setUpcomingGames(sortedUpcomingGames);

    const topGamesResult = require('../topGames.json');
    setTopGames(topGamesResult.results);

  }, []);

  const handleSearchSubmit = async () => {

  };

  return (
    <SafeAreaView style={styles.homeScreen}>

      {/* SearchBar */}
      <View style={styles.searchBarContainer}>
        <TextInput
          defaultValue={searchBarText}
          onChangeText={(newText) => { setSearchBarText(newText); }}
          style={styles.searchBarInput}
          placeholder="Search games"
          placeholderTextColor={'rgba(255, 255, 255, 0.4)'}
        />
        <Pressable onPress={handleSearchSubmit}>
          <Icon
            name="ios-search"
            color="#e7e8e8"
            size={24}
          />
        </Pressable>
      </View>

      <SafeAreaView style={styles.upcomingGames}>

        <Text style={styles.upcomingGamesHeading}>Releasing Soon</Text>

        <View>

          <FlatList
            data={upcomingGames}
            renderItem={({ item }) => <LargeGameCard item={item} />}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
          />

        </View>

      </SafeAreaView>

      <SafeAreaView style={styles.upcomingGames}>

        <Text style={styles.upcomingGamesHeading}>Top Rated Games</Text>

        <View>

          <FlatList
            data={topGames}
            renderItem={({ item }) => <SmallGameCard item={item} />}
            keyExtractor={item => item.id}
            horizontal
            pagingEnabled
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
          />



        </View>

      </SafeAreaView>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  homeScreen: {
    backgroundColor: '#0B1416',
    // flex: '1 1 0%';
    flexGrow: 1
  },

  searchBarContainer: {
    paddingTop: StatusBar.currentHeight,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#232c2d',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#3c4345'
  },

  searchBarInput: {
    fontSize: 20,
    color: '#e7e8e8',
  },

  upcomingGames: {
    padding: 8,
    paddingBottom: 0,
  },
  upcomingGamesHeading: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 600,
    padding: 8
  },

  backgroundImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
  }

});

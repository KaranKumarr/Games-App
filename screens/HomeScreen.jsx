import { View, Text, Button, Pressable, Image, TextInput, StyleSheet } from "react-native";
import * as React from "react";
import Icon from "react-native-vector-icons/Ionicons";

export default function Home() {

  const [searchBarText, setSearchBarText] = React.useState("");

  const handleSearchSubmit = async () => {
    console.log(searchBarText);
  };

  return (
    <View style={styles.homeScreen}>

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

    </View>
  );
}

const styles = StyleSheet.create({

  homeScreen: {
    backgroundColor: '#0B1416',
    // flex: '1 1 0%';
    flexGrow: 1
  },

  searchBarContainer: {
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

});

import { StyleSheet, Text, View, TextInput, Pressable, StatusBar } from 'react-native';
import React from 'react';
import Icon from "react-native-vector-icons/Ionicons";

const SearchBar = ({ navigation }) => {

    const [searchBarText, setSearchBarText] = React.useState("");


    const handleSearchSubmit = async () => {

        const search = searchBarText;
        setSearchBarText("");

        navigation.navigate('Search', {
            query: {
                type: 'search',
                query: search
            }
        });

    };

    {/* SearchBar */ }
    return (
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
                    size={24} />
            </Pressable>

        </View >

    );
};

export default SearchBar;

const styles = StyleSheet.create({
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
});
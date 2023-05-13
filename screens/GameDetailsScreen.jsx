import { Image, StyleSheet, Text, StatusBar, View, ScrollView, Dimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from "react-native-vector-icons/Ionicons";
import moment from 'moment';

const GameDetailsScreen = ({ navigation, route }) => {

    console.log(route);


    const [gameDetails, setGameDetails] = useState({
        "id": 13537,
        "slug": "half-life-2",
        "name": "Half-Life 2",
        "name_original": "Half-Life 2",
        "description": "<p>Gordon Freeman became the most popular nameless and voiceless protagonist in gaming history. He is painted as the most famous scientist and a hero within the world of Half-Life, and for a good reason. In the first game he saved the planet from alien invasion, this time, when the invasion is already begun, the world needs his help one more time. And you, as a player, will help this world to survive. This time Gordon arrives in City 17, ravaged and occupied by Combines, where he meets his old Black Mesa friends. <br />\nWhat is different, aside from the overall design quality, is the use of Valve’s Source engine that not only expands on the fluidity of character model animations and movement but allows players to interact with a myriad of objects with the advanced and realistic (to an extent) physics. Classic Headcrab Zombies are revamped and have new variants that provide players with different threats. For a story-driven FPS, Half-Life 2 is unique in its plot delivery, and making in-game mechanics feel natural, be it platforming or driving.</p>",
        "metacritic": 96,
        "metacritic_platforms": [],
        "released": "2004-11-16",
        "tba": false,
        "updated": "2023-05-12T20:58:57",
        "background_image": "https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg",
        "background_image_additional": "https://media.rawg.io/media/screenshots/b2d/b2d0754d02af8e2733f05a8a769b55c7.jpg",
        "website": "http://www.half-life2.com",
        "rating": 4.49,
        "rating_top": 5,
        "ratings": [
            {
                "id": 5,
                "title": "exceptional",
                "count": 2298,
                "percent": 63.87
            },
            {
                "id": 4,
                "title": "recommended",
                "count": 985,
                "percent": 27.38
            },
            {
                "id": 3,
                "title": "meh",
                "count": 207,
                "percent": 5.75
            },
            {
                "id": 1,
                "title": "skip",
                "count": 108,
                "percent": 3.0
            }
        ],
        "reactions": {
            "1": 15,
            "2": 3,
            "3": 7,
            "4": 17,
            "5": 1,
            "6": 1,
            "7": 4,
            "10": 7,
            "11": 11,
            "12": 6
        },
        "added": 13204,
        "added_by_status": {
            "yet": 613,
            "owned": 8308,
            "beaten": 3405,
            "toplay": 278,
            "dropped": 510,
            "playing": 90
        },
        "playtime": 7,
        "screenshots_count": 9,
        "movies_count": 0,
        "creators_count": 5,
        "achievements_count": 33,
        "parent_achievements_count": 33,
        "reddit_url": "https://www.reddit.com/r/HalfLife/",
        "reddit_name": "r/HλLFLIFE",
        "reddit_description": "Welcome. Welcome to r/HalfLife. You have chosen, or have been chosen to subscribe to our subreddit. It's safer here. You've come to the right place to discuss Half-Life.",
        "reddit_logo": "https://b.thumbs.redditmedia.com/Hy9JJyd9lfRSuYcs.png",
        "reddit_count": 3988,
        "twitch_count": 123,
        "youtube_count": 1000000,
        "reviews_text_count": 22,
        "ratings_count": 3576,
        "suggestions_count": 551,
        "alternative_names": [
            "HL2"
        ],
        "metacritic_url": "",
        "parents_count": 0,
        "additions_count": 5,
        "game_series_count": 2,
        "user_game": null,
        "reviews_count": 3598,
        "saturated_color": "0f0f0f",
        "dominant_color": "0f0f0f",
        "parent_platforms": [
            {
                "platform": {
                    "id": 1,
                    "name": "PC",
                    "slug": "pc"
                }
            },
            {
                "platform": {
                    "id": 3,
                    "name": "Xbox",
                    "slug": "xbox"
                }
            },
            {
                "platform": {
                    "id": 8,
                    "name": "Android",
                    "slug": "android"
                }
            },
            {
                "platform": {
                    "id": 5,
                    "name": "Apple Macintosh",
                    "slug": "mac"
                }
            },
            {
                "platform": {
                    "id": 6,
                    "name": "Linux",
                    "slug": "linux"
                }
            }
        ],
        "platforms": [
            {
                "platform": {
                    "id": 4,
                    "name": "PC",
                    "slug": "pc",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 512074,
                    "image_background": "https://media.rawg.io/media/games/7cf/7cfc9220b401b7a300e409e539c9afd5.jpg"
                },
                "released_at": "2004-11-16",
                "requirements": {
                    "minimum": "Minimum:\r\n\r\nOS: Windows 7, Vista, XP\r\n\r\nProcessor: 1.7 Ghz\r\n\r\nMemory: 512 MB RAM\r\n\r\nGraphics: DirectX 8.1 level Graphics Card (requires support for SSE)\r\n\r\nStorage: 6500 MB available space"
                }
            },
            {
                "platform": {
                    "id": 5,
                    "name": "macOS",
                    "slug": "macos",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 101433,
                    "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
                },
                "released_at": "2004-11-16",
                "requirements": {
                    "minimum": "Minimum:\r\n\r\nOS: Leopard 10.5.8, Snow Leopard 10.6.3, or higher\r\n\r\nMemory: 1 GB RAM\r\n\r\nGraphics: Nvidia GeForce8 or higher, ATI X1600 or higher, Intel HD 3000 or higher"
                }
            },
            {
                "platform": {
                    "id": 14,
                    "name": "Xbox 360",
                    "slug": "xbox360",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 2777,
                    "image_background": "https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg"
                },
                "released_at": "2004-11-16",
                "requirements": {}
            },
            {
                "platform": {
                    "id": 6,
                    "name": "Linux",
                    "slug": "linux",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 75058,
                    "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                },
                "released_at": "2004-11-16",
                "requirements": {}
            },
            {
                "platform": {
                    "id": 80,
                    "name": "Xbox",
                    "slug": "xbox-old",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 724,
                    "image_background": "https://media.rawg.io/media/games/683/6833fbb183fd72a61c032501e3bc6d36.jpg"
                },
                "released_at": "2004-11-16",
                "requirements": {}
            },
            {
                "platform": {
                    "id": 21,
                    "name": "Android",
                    "slug": "android",
                    "image": null,
                    "year_end": null,
                    "year_start": null,
                    "games_count": 52220,
                    "image_background": "https://media.rawg.io/media/games/562/562553814dd54e001a541e4ee83a591c.jpg"
                },
                "released_at": "2004-11-16",
                "requirements": {
                    "minimum": "4.4 and up"
                }
            }
        ],
        "stores": [
            {
                "id": 14891,
                "url": "",
                "store": {
                    "id": 1,
                    "name": "Steam",
                    "slug": "steam",
                    "domain": "store.steampowered.com",
                    "games_count": 74855,
                    "image_background": "https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg"
                }
            },
            {
                "id": 41441,
                "url": "",
                "store": {
                    "id": 8,
                    "name": "Google Play",
                    "slug": "google-play",
                    "domain": "play.google.com",
                    "games_count": 17025,
                    "image_background": "https://media.rawg.io/media/games/13a/13a528ac9cf48bbb6be5d35fe029336d.jpg"
                }
            }
        ],
        "developers": [
            {
                "id": 1612,
                "name": "Valve Software",
                "slug": "valve-software",
                "games_count": 42,
                "image_background": "https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg"
            },
            {
                "id": 23342,
                "name": "NVIDIA Lightspeed Studios",
                "slug": "nvidia-lightspeed-studios",
                "games_count": 23,
                "image_background": "https://media.rawg.io/media/screenshots/a0f/a0f898ff084625c10e7f84058325b2eb.jpg"
            }
        ],
        "genres": [
            {
                "id": 4,
                "name": "Action",
                "slug": "action",
                "games_count": 172395,
                "image_background": "https://media.rawg.io/media/games/26d/26d4437715bee60138dab4a7c8c59c92.jpg"
            },
            {
                "id": 2,
                "name": "Shooter",
                "slug": "shooter",
                "games_count": 59316,
                "image_background": "https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg"
            }
        ],
        "tags": [
            {
                "id": 31,
                "name": "Singleplayer",
                "slug": "singleplayer",
                "language": "eng",
                "games_count": 204815,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 40847,
                "name": "Steam Achievements",
                "slug": "steam-achievements",
                "language": "eng",
                "games_count": 30112,
                "image_background": "https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg"
            },
            {
                "id": 7,
                "name": "Multiplayer",
                "slug": "multiplayer",
                "language": "eng",
                "games_count": 34794,
                "image_background": "https://media.rawg.io/media/games/c4b/c4b0cab189e73432de3a250d8cf1c84e.jpg"
            },
            {
                "id": 13,
                "name": "Atmospheric",
                "slug": "atmospheric",
                "language": "eng",
                "games_count": 29221,
                "image_background": "https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg"
            },
            {
                "id": 40849,
                "name": "Steam Cloud",
                "slug": "steam-cloud",
                "language": "eng",
                "games_count": 13958,
                "image_background": "https://media.rawg.io/media/games/8a0/8a02f84a5916ede2f923b88d5f8217ba.jpg"
            },
            {
                "id": 7808,
                "name": "steam-trading-cards",
                "slug": "steam-trading-cards",
                "language": "eng",
                "games_count": 7579,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 42,
                "name": "Great Soundtrack",
                "slug": "great-soundtrack",
                "language": "eng",
                "games_count": 3236,
                "image_background": "https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg"
            },
            {
                "id": 118,
                "name": "Story Rich",
                "slug": "story-rich",
                "language": "eng",
                "games_count": 17971,
                "image_background": "https://media.rawg.io/media/games/16b/16b1b7b36e2042d1128d5a3e852b3b2f.jpg"
            },
            {
                "id": 8,
                "name": "First-Person",
                "slug": "first-person",
                "language": "eng",
                "games_count": 28344,
                "image_background": "https://media.rawg.io/media/games/b54/b54598d1d5cc31899f4f0a7e3122a7b0.jpg"
            },
            {
                "id": 32,
                "name": "Sci-fi",
                "slug": "sci-fi",
                "language": "eng",
                "games_count": 17018,
                "image_background": "https://media.rawg.io/media/games/c80/c80bcf321da44d69b18a06c04d942662.jpg"
            },
            {
                "id": 40845,
                "name": "Partial Controller Support",
                "slug": "partial-controller-support",
                "language": "eng",
                "games_count": 9679,
                "image_background": "https://media.rawg.io/media/games/5a4/5a44112251d70a25291cc33757220fce.jpg"
            },
            {
                "id": 16,
                "name": "Horror",
                "slug": "horror",
                "language": "eng",
                "games_count": 41752,
                "image_background": "https://media.rawg.io/media/games/2ad/2ad87a4a69b1104f02435c14c5196095.jpg"
            },
            {
                "id": 30,
                "name": "FPS",
                "slug": "fps",
                "language": "eng",
                "games_count": 12025,
                "image_background": "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg"
            },
            {
                "id": 193,
                "name": "Classic",
                "slug": "classic",
                "language": "eng",
                "games_count": 1728,
                "image_background": "https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg"
            },
            {
                "id": 63,
                "name": "Zombies",
                "slug": "zombies",
                "language": "eng",
                "games_count": 9604,
                "image_background": "https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg"
            },
            {
                "id": 62,
                "name": "Moddable",
                "slug": "moddable",
                "language": "eng",
                "games_count": 763,
                "image_background": "https://media.rawg.io/media/games/995/9951d9d55323d08967640f7b9ab3e342.jpg"
            },
            {
                "id": 40833,
                "name": "Captions available",
                "slug": "captions-available",
                "language": "eng",
                "games_count": 1227,
                "image_background": "https://media.rawg.io/media/games/23b/23b69bfef2a1ce2e3dcdf1aa8ef1150b.jpg"
            },
            {
                "id": 114,
                "name": "Physics",
                "slug": "physics",
                "language": "eng",
                "games_count": 17662,
                "image_background": "https://media.rawg.io/media/games/7fa/7fa0b586293c5861ee32490e953a4996.jpg"
            },
            {
                "id": 172,
                "name": "Aliens",
                "slug": "aliens",
                "language": "eng",
                "games_count": 6203,
                "image_background": "https://media.rawg.io/media/games/4cb/4cb463b5588adc672124fb041f09e91c.jpg"
            },
            {
                "id": 119,
                "name": "Dystopian",
                "slug": "dystopian",
                "language": "eng",
                "games_count": 1755,
                "image_background": "https://media.rawg.io/media/games/2e1/2e187b31e5cee21c110bd16798d75fab.jpg"
            },
            {
                "id": 40839,
                "name": "Includes Source SDK",
                "slug": "includes-source-sdk",
                "language": "eng",
                "games_count": 60,
                "image_background": "https://media.rawg.io/media/games/48e/48e63bbddeddbe9ba81942772b156664.jpg"
            },
            {
                "id": 319,
                "name": "Silent Protagonist",
                "slug": "silent-protagonist",
                "language": "eng",
                "games_count": 80,
                "image_background": "https://media.rawg.io/media/screenshots/5ce/5ce17393fdcd1a4356187e388fa21723.jpeg"
            },
            {
                "id": 62349,
                "name": "vr mod",
                "slug": "vr-mod",
                "language": "eng",
                "games_count": 17,
                "image_background": "https://media.rawg.io/media/screenshots/1bb/1bb3f78f0fe43b5d5ca2f3da5b638840.jpg"
            }
        ],
        "publishers": [
            {
                "id": 3399,
                "name": "Valve",
                "slug": "valve",
                "games_count": 45,
                "image_background": "https://media.rawg.io/media/games/ccc/ccc0d5396e3331d58e5eb58a6a1fa1b7.jpg"
            }
        ],
        "esrb_rating": {
            "id": 4,
            "name": "Mature",
            "slug": "mature"
        },
        "clip": null,
        "description_raw": "Gordon Freeman became the most popular nameless and voiceless protagonist in gaming history. He is painted as the most famous scientist and a hero within the world of Half-Life, and for a good reason. In the first game he saved the planet from alien invasion, this time, when the invasion is already begun, the world needs his help one more time. And you, as a player, will help this world to survive. This time Gordon arrives in City 17, ravaged and occupied by Combines, where he meets his old Black Mesa friends. \r\nWhat is different, aside from the overall design quality, is the use of Valve’s Source engine that not only expands on the fluidity of character model animations and movement but allows players to interact with a myriad of objects with the advanced and realistic (to an extent) physics. Classic Headcrab Zombies are revamped and have new variants that provide players with different threats. For a story-driven FPS, Half-Life 2 is unique in its plot delivery, and making in-game mechanics feel natural, be it platforming or driving."
    });


    const date = moment(gameDetails.released).format('DD-MMM-YYYY');

    console.log(date);

    return (
        <>
            <SafeAreaView style={styles.mainBody}>

                <View>
                    <Image
                        source={{ uri: gameDetails.background_image }}
                        style={styles.backgroundImage}
                    />

                    <LinearGradient
                        style={styles.backgroundShadow}
                        colors={['rgba(0,0,0,0.03)', 'rgba(0,0,0,0.01)', 'rgba(0,0,0,0.75)']}
                    >
                    </LinearGradient>
                </View>

                <ScrollView style={styles.container}>

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
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default GameDetailsScreen;

const styles = StyleSheet.create({
    mainBody: {
        backgroundColor: '#0B1416',
        flexGrow: 1,
        // paddingTop: StatusBar.currentHeight
    },
    backgroundImage: {
        height: 250,
    },
    backgroundShadow: {
        height: 250,
        width: Dimensions.get('window').width,
        position: 'absolute',
        zIndex: 20,
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
        fontSize: 16,
        textTransform: 'uppercase'
    }

});
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { StatusBar } from 'expo-status-bar';
import GameDetailsScreen from './screens/GameDetailsScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

      <StatusBar style='light' />

      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        />
        <Stack.Screen
          name='Game'
          component={GameDetailsScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

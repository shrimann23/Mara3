import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen'; 
import AudioScreen from './AudioScreen';
import VideoScreen from './VideoScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
           <Stack.Screen name="Home" component={HomeScreen} />
           <Stack.Screen name="AudioScreen" component={AudioScreen} />
           <Stack.Screen name="VideoScreen" component={VideoScreen} />
         </Stack.Navigator>       
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
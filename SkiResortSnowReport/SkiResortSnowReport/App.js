import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button } from 'react-native';
import LandingPage from './LandingPage';
import HomeScreen from './LoginPage';
import DetailPage from './DetailPage';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{headerShown:false}}
        />
        <Stack.Screen 
          name="LandingPage"
          component={LandingPage}
          options={{headerShown:true,
            headerStyle: {
            backgroundColor: '#ADD8E6',
          }}}
        />
        <Stack.Screen 
          name="DetailPage"
          component={DetailPage}
          options={{headerShown:true,
            headerStyle: {
            backgroundColor: '#ADD8E6',
          }}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomTabNavigator from "./HomeBottomTabNavigator";
import CreatePost from '../screens/CreatePost';

const Stack = createStackNavigator();
const RootNavigation = () => {
    return (
      <NavigationContainer>
      <Stack.Navigator
        screenOption={{
            headerShown: false,
        }}
        >
      <Stack.Screen name="Home" component={HomeBottomTabNavigator} />
      <Stack.Screen
      options={{
        headerShown: true,
        title: 'Post',
      }} 
      name="CreatePost" component={CreatePost} />
      </Stack.Navigator>
      </NavigationContainer>
    )
};


export default RootNavigation;
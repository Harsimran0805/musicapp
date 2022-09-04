import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Entypo } from 'react-native-vector-icons/Entypo'
import { color } from "react-native-reanimated";
import { AntDesign } from 'react-native-vector-icons/AntDesign'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {Image, Text} from "react-native";
import plusIcon from '../../assets/images/plus-icon.png'
import Camera from "../screens/Camera";

const Tab = createBottomTabNavigator();

const HomeBottomTabNavigator = () => {
    return(
        <Tab.Navigator 
        tabBarOptions={{
            tabStyle: {
                backgroundColor: '#000'
            },

            activeTinColor:'afff',
            }}
        >
            <Tab.Screen
             name={'Home'} 
             component={Home}
             options={{
            tabBarIcon: ({color :string}) => (
            <Entypo name={'home'} size={24} color={color} />
                ),
             }} 
             />
            <Tab.Screen
             name={'Search'}
            component={() => <Text>Search</Text>}
            options={{
                tabBarIcon: ({color :string}) => (
               <AntDesign name={'search'} size={24} color={color} />
                ),
             }} 
              />
            <Tab.Screen 
            name={'Upload'} 
            component={Camera}
            options={{
                tabBarIcon: ({color :string}) => (
               <Image source={plusIcon} style={{height: 35, resizeMode: 'contain'}} />
                ),
                tabBarLabel: () => null,
             }} 
              />

            <Tab.Screen 
            name={'Inbox'} 
            component={Home} 
            options={{
                tabBarIcon: ({color :string}) => (
               <MaterialCommunityIcons name={'message-minus-outline'} size={25} color={color} />
                ),
             }} 
             />
            <Tab.Screen 
            name={'Profile'} 
            component={Home} 
            options={{
                tabBarIcon: ({color :string}) => (
               <Ionicons name={'person-outline'} size={24} color={color} />
                ),
             }} 
             />
        </Tab.Navigator>

    );
};

export default HomeBottomTabNavigator;
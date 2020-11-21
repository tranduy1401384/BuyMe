import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeScreen, SearchScreen, ProfileScreen } from '../screens'
import { View } from 'react-native'
import { VectorIcon } from '../components'


export type BottomParamList = {
    homeScreen: undefined,
    profileScreen: undefined,
    searchScreen: undefined
}

const BottomTab = createBottomTabNavigator<BottomParamList>()

export function BottomNavigator() {
    return (
        <BottomTab.Navigator
            tabBarOptions={{}}>
            <BottomTab.Screen
                name="homeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ color, focused, size }) => <VectorIcon type="FontAwesome" name="home" color={color} />
                }} />
            <BottomTab.Screen
                name="searchScreen"
                component={SearchScreen}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, focused, size }) => <VectorIcon type="FontAwesome" name="search" color={color} />
                }} />
            <BottomTab.Screen
                name="profileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: "Profile",
                    tabBarIcon: ({ color, focused, size }) => <VectorIcon type="FontAwesome" name="user" color={color} />
                }} />
        </BottomTab.Navigator>
    )
}
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NextSharings } from '../Screens/NextSharings';
import { PreviousSharing } from '../Screens/PreviousSharing';
import { Profile } from '../Screens/Profile';

import { MaterialIcons } from '@expo/vector-icons';

import { SharingsProvider, useSharings } from '../Providers/SharingsProvider';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {

    const { sharings } = useSharings();

    return (
        <SharingsProvider>
            <Tab.Navigator
                screenOptions={{
                    tabBarActiveTintColor: '#005B8F',
                    tabBarInactiveTintColor: '#FFFFFF',
                    tabBarActiveBackgroundColor: '#FFFFFF',
                    tabBarInactiveBackgroundColor: '#005B8F',
                    headerShown: false,
                }}
            >
                <Tab.Screen
                    name="Próximo Sharing"
                    component={NextSharings}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name="queue-play-next" size={size} color={color} />
                        )
                    }}
                />

                <Tab.Screen
                    name="Sharings Anteriores"
                    component={PreviousSharing}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name="date-range" size={size} color={color} />
                        )
                    }}
                />

                <Tab.Screen
                    name="Perfil"
                    component={Profile}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <MaterialIcons name="person-outline" size={size} color={color} />
                        )
                    }}
                />
            </Tab.Navigator>
        </SharingsProvider>
    );
}
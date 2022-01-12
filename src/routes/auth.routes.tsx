import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';

import { NewSharing } from '../Screens/NewSharing';
import { SignIn } from '../Screens/SignIn';
import { Register } from '../Screens/Register';
import TabRoutes from './tab.routes';


const Stack = createStackNavigator();

export function AuthRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                />

                <Stack.Screen
                    name="Register"
                    component={Register}
                />

                <Stack.Screen
                    name="TabRoutes"
                    component={TabRoutes}
                />

                <Stack.Screen
                    name="NewSharing"
                    component={NewSharing}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
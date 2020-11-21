import React from 'react'
import { createNativeStackNavigator } from "react-native-screens/native-stack"
import { LoginScreen, RegisterScreen } from "../screens"

export type AuthenticationParamList = {
    loginScreen: undefined,
    registerScreen: undefined
}

const Stack = createNativeStackNavigator<AuthenticationParamList>()

export const AuthenticationNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
            }}>
            <Stack.Screen name="loginScreen" component={LoginScreen} />
            <Stack.Screen name="registerScreen" component={RegisterScreen} />
        </Stack.Navigator>
    )
}

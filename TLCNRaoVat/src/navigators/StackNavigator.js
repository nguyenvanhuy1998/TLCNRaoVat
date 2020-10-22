import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
    LoginScreen,
    RegisterScreen,
    ForgotPassword
} from '../screen'
const Stack = createStackNavigator();
export default StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="LoginScreen"
            screenOptions={({ route }) => {
                const animationEnabled = route.params && !route.params.animationDisable;
                const animationTypeForReplace = route.params ? route.params.animationTypeForReplace : 'push';
                return {
                    animationEnabled,
                    gestureEnabled: true,
                    headerShown: false,
                    animationTypeForReplace
                }
            }}>
            
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator >
    )
}
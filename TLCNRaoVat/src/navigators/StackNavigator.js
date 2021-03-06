import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import {
    LoginScreen,
    RegisterScreen,
    ForgotPassword,
    HelpCart,
    HelpShop,
    Batdongsan,
    BatdongsanDetail,
} from '../screen'
import Home from './TabbarNavigator'
const Stack = createStackNavigator();
export default StackNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
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
            <Stack.Screen name="Home" component = {Home}/>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name = "HelpShop" component = {HelpShop}/>
            <Stack.Screen name = "HelpCart" component = {HelpCart}/>
            <Stack.Screen name = "Batdongsan" component = {Batdongsan}/>
            <Stack.Screen name = "BatdongsanDetail" component = {BatdongsanDetail}/>


            
            

        </Stack.Navigator>
    )
}
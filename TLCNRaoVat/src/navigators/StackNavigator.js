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
    PostStepFirst,
    PostStepSecond,
    PostStepThird,
    PostStepFour,
    SplashScreen,
    UpdateUser,
} from '../screen'
import Home from './TabbarNavigator'
const Stack = createStackNavigator();
export default StackNavigator = () => {
    return (
        <Stack.Navigator
            // initialRouteName="PostStepThird"
            initialRouteName="SplashScreen"
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
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="HelpShop" component={HelpShop} />
            <Stack.Screen name="HelpCart" component={HelpCart} />
            <Stack.Screen name="Batdongsan" component={Batdongsan} />
            <Stack.Screen name="BatdongsanDetail" component={BatdongsanDetail} />
            <Stack.Screen name="PostStepFirst" component={PostStepFirst} />
            <Stack.Screen name="PostStepSecond" component={PostStepSecond} />
            <Stack.Screen name="PostStepThird" component={PostStepThird} />
            <Stack.Screen name="PostStepFour" component={PostStepFour} />
            <Stack.Screen name="UpdateUser" component = {UpdateUser}/>
        </Stack.Navigator> 
    )
}
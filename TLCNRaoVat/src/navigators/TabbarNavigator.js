import * as React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, PostScreen, HelpScreen, ProfileScreen } from '../screen';
import { iconHome, iconHomeLine, iconPost, iconPostLine, iconHelp, iconHelpLine, iconProfile, iconProfileLine } from '../images';
import colors from '../styles/colors';
const Tab = createBottomTabNavigator();
function getOption({ route }) {
    return {
    }
}

export default function TabHome() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Trang chủ') {
                        iconName = focused
                            ? iconHome
                            : iconHomeLine;
                    } else if (route.name === 'Bài đăng') {
                        iconName = focused
                            ? iconPost
                            : iconPostLine
                    } else if (route.name === 'Hỗ trợ') {
                        iconName = focused
                            ? iconHelp
                            : iconHelpLine
                    } else if (route.name == 'Tài khoản') {
                        iconName = focused
                            ? iconProfile
                            : iconProfileLine
                    }

                    // You can return any component that you like here!
                    return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode='contain' />;
                },
            })}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'white',
                style: { backgroundColor: colors.headerColor},
                labelStyle:{fontSize:11, fontWeight:'600'},
                
                
            
            }}
        >
            <Tab.Screen name="Trang chủ" component={HomeScreen} />
            <Tab.Screen name="Bài đăng" component={PostScreen} />
            <Tab.Screen name="Hỗ trợ" component={HelpScreen} />
            <Tab.Screen name="Tài khoản" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/Screens/Home'
import Orders from '../src/Screens/Orders'
import Profile from '../src/Screens/Profile'
import Parking from '../src/Screens/Parking'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Tab.Navigator
            initialRouteName='Home' screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Orders') {
                        iconName = focused ? 'cube' : 'cube-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person-circle' : 'person-circle-outline';
                    }
                    else if (route.name === 'Parking') {
                        iconName = focused ? 'car-sport' : 'car-sport-outline';
                    }
                    else if (route.name === 'LogOut') {
                        iconName = focused ? 'log-out' : 'log-out-outline';
                    }
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#43c1c9',
                tabBarInactiveTintColor: '#43c1c9',
            })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Orders" component={Orders} />
            <Tab.Screen name="Parking" component={Parking} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    );
}
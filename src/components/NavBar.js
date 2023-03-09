import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home'
import Orders from '../pages/Orders'
import User from '../pages/User'
import Parking from '../pages/Parking'
import LogOut from '../pages/auth/LogOut'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function NavBar() {
  return (

    <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
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
      tabBarActiveTintColor: 'gray',
      tabBarInactiveTintColor: 'gray',
    })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Orders" component={Orders} />
      <Tab.Screen name="Parking" component={Parking} />
      <Tab.Screen name="Profile" component={User} />
      <Tab.Screen name="LogOut" component={LogOut} />
    </Tab.Navigator>

  );
}
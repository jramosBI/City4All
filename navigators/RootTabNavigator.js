import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../src/Screens/Home'
import Orders from '../src/Screens/Orders'
import Profile from '../src/Screens/Profile'
import Parking from '../src/Screens/Parking'
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as SecureStore from 'expo-secure-store';

const Tab = createBottomTabNavigator();

export default function App() {
    const [userName, setUserName] = React.useState('');

    React.useEffect(() => {

        async function retrieveToken() {
            const nameValue = await SecureStore.getItemAsync('name');
            const token = await SecureStore.getItemAsync('token');

            fetch(`https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Users?search=${nameValue}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    setUserName(json.value[0].name);
                    SecureStore.setItemAsync("userName", json.value[0].name);
                    SecureStore.setItemAsync("userId", json.value[0].id);
                })
                .catch((error) => {
                    console.error(error);
                });
        }

        retrieveToken();
    }, []);
    return (
        <Tab.Navigator
            initialRouteName='HomeScreen' screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'HomeScreen') {
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
            <Tab.Screen name="HomeScreen" options={{ title: "Home" }} component={Home} />
            <Tab.Screen name="Orders" component={Orders} />
            <Tab.Screen name="Parking" component={Parking} />
            <Tab.Screen name="Profile" options={{ title: userName }} component={Profile} />
        </Tab.Navigator>
    );
}
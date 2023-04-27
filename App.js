import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootTabNavigator from './navigators/RootTabNavigator'
import Login from './src/Screens/auth/Login';
import SignUp from './src/Screens/auth/SignUp';
import AddOrder from './src/Screens/AddOrder';
import EntryManual from './src/Screens/EntryManual'
import ParkingList from './src/Screens/ParkingList';
import ScanPlate from './src/Screens/ScanPlate';
import ValidateLogin from './src/Components/ValidateLogin'
import OrderPerId from './src/Screens/OrderPerId'

const Stack = createNativeStackNavigator();
function App({ route }) {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name="Home"
          component={RootTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ValidateLogin" component={ValidateLogin} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ParkingList" options={{ title: 'Parking List' }} component={ParkingList} />
        <Stack.Screen name="AddOrder" options={{ title: 'Add New Order' }} component={AddOrder} />
        <Stack.Screen name="EntryManual" options={{ title: 'Entry Manual' }} component={EntryManual} />
        <Stack.Screen name="OrderPerId" options={{ title: 'Order Per Id' }} component={OrderPerId} />
        <Stack.Screen name="ScanPlate" component={ScanPlate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

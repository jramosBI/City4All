import { View, KeyboardAvoidingView, Image, TextInput, Touchable, TouchableOpacity, Text, StyleSheet, Button } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NavBar from '../../components/NavBar'
import SignUp from './SignUp';

const Stack = createStackNavigator();

function Login() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login">
                    {({ navigation }) => (
                        <><KeyboardAvoidingView
                            behavior='padding'
                            keyboardVerticalOffset={-64}
                            style={styles.background}>
                            <View style={styles.logoContainer}>
                                <Image style={styles.logoImg} source={require('../../assets/img/logo_inv.png')} />
                            </View>
                            <View style={styles.inputsContainer}>
                                <TextInput style={styles.input}
                                    placeholder="Email..."
                                    autocorret={false}
                                    onChangeText={() => { }} />
                                <TextInput style={styles.input}
                                    placeholder="Password..."
                                    autocorret={false}
                                    onChangeText={() => { }} />

                                <TouchableOpacity style={styles.btnSubmit} onPress={() => navigation.navigate('NavBar')}>
                                    <Text style={styles.btnText}>Log-In</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                                    <Text style={styles.btnSignUpText}>Don't have an account yet? Register here!</Text>
                                </TouchableOpacity>
                            </View>
                        </KeyboardAvoidingView></>
                    )}
                </Stack.Screen>
                <Stack.Screen name="NavBar" component={NavBar} options={{ headerShown: false }}/>
                <Stack.Screen name="SignUp" component={SignUp} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Login

const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2'
    },
    logoContainer: {
        flex: 1,
        justifyContent: 'center'
    },
    inputsContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50,
    },
    input: {
        backgroundColor: 'white',
        width: '90%',
        fontSize: 15,
        borderRadius: 30,
        padding: 20,
        marginBottom: 15,
        color: 'gray',
        height: 60,
        borderWidth: 1,
        borderColor: '#D5D3D3',
    },
    btnSubmit: {
        backgroundColor: '#43c1c9',
        width: '50%',
        padding: 10,
        marginBottom: 15,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        color: 'white',
        fontSize: 18,
    },
    btnSignUpText: {
        color: '#43c1c9',
        fontSize: 15,
    },
    logoImg: {
        width: 220,
        height: 170,
    }
})
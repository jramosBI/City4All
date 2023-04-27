import React, { useState } from 'react';
import { ActivityIndicator, Image, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Button, Alert } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';
import CryptoJS from 'crypto-js';

export default function Login({ navigation }) {
    const [username, onChangeEmail] = useState('manelseg');
    const [password, onChangePassword] = useState('123');
    const [message, setMessage] = useState('');
    const [token, setToken] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Hex);

    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
        navigation.navigate('Home')
    }
    async function handleSubmit() {
        setIsLoading(true);
        let json;
        try {
            const response = await fetch('https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Users/logindb', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json-patch+json',
                },
                body: JSON.stringify({
                    username,
                    hash,
                }),
            });

            console.log(response.status);

            if (response.status !== 200) {
                throw new Error('API error');
            }

            json = await response.json();
            if (json) {
                setToken(json.value);
                save("token", json.value);
                save("name", username);
            } else {
                throw new Error('JSON data is undefined');
            }
        } catch (error) {
            setMessage("Invalid Credentials");
            console.error(error);
            return;
        } finally {
            setIsLoading(false);
        }
    }




    return (
        <KeyboardAvoidingView style={styles.container}>
            <Image
                style={{ width: '90%', height: '20%' }}
                resizeMode={'contain'}
                source={require('../../../assets/src/img/logo_inv.png')}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={username}
                placeholder="Username..."
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={password}
                placeholder="Password..."
                keyboardType="default"
                secureTextEntry={true}
            />
            <Pressable style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.label}>Login</Text>
            </Pressable>
            {isLoading && (
                <ActivityIndicator style={styles.loading} size="large" color="#43c1c9" />
            )}
            {message && (
                <Text style={styles.labelErrorMessage}>{message}</Text>
            )}
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text style={styles.btnSignUpText}>Don't have an account yet? Register here!</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }, input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 15,
        width: '70%',
        borderColor: '#43c1c9',
    }, btn: {
        width: '70%',
        height: 40,
        borderRadius: 15,
        backgroundColor: '#43c1c9',
        justifyContent: 'center',
        alignItems: 'center'
    }, label: {
        color: 'white'
    }, btnSignUpText: {
        marginTop: 10,
        color: '#43c1c9',
        fontSize: 15,
    }, loading: {
        padding: 20,
    }, labelErrorMessage: {
        color: 'red',
        margin: 15,
        fontSize: 15,
    }
})

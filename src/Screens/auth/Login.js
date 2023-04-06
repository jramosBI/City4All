import React, { useState } from 'react';
import { Image, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Button, Alert } from 'react-native'
import * as SecureStore from 'expo-secure-store';
import axios from 'axios';

export default function Login({ navigation }) {
    const [username, onChangeEmail] = useState('manelseg');
    const [hash, onChangePassword] = useState('A665A45920422F9D417E4867EFDC4FB8A04A1F3FFF1FA07E998E86F7F7A27AE3');
    const [message, setMessage] = useState('');

    async function save(key, value) {
        await SecureStore.setItemAsync(key, value);
        navigation.navigate('Home')
    }

    async function handleSubmit() {
        try {
            const response = await axios.post('https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Users/logindb', {
                username,
                hash
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json-patch+json',
                }
            });

            if (!response.status === 200) {
                throw new Error('API error');
            }

            const json = response.data;
            setMessage(json.value);

            save("token", json.value)

        } catch (error) {
            setMessage(error.message);
            console.error(error);
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
                placeholder="Email..."
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={hash}
                placeholder="Password..."
                keyboardType="default"
                secureTextEntry={true}
            />
            <Pressable style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.label}>Login</Text>
            </Pressable>
            {message && (
                <Text>{message}</Text>
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
    },
})

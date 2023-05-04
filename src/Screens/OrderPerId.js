import * as React from 'react';
import { ActivityIndicator, Image, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, KeyboardAvoidingView, useColorScheme } from 'react-native'

export default function Home({ route }) {
    const { orderName, orderDescription, shippingCompany } = route.params;
    const colorScheme = useColorScheme();

    return (
        <KeyboardAvoidingView style={[styles.container, colorScheme === 'light' ? styles.lightMode : styles.darkMode]}>
            <TextInput
                style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}
                value={orderName}
                placeholder="Email..."
                keyboardType="email-address"
                editable={false}
            />
            <TextInput
                style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}
                value={orderDescription}
                placeholder="Password..."
                keyboardType="default"
                editable={false}
            />
            <TextInput
                style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}
                value={shippingCompany}
                placeholder="Email..."
                keyboardType="email-address"
                editable={false}
            />
            <Pressable style={styles.btn}>
                <Text style={styles.label}>Recive Order</Text>
            </Pressable>
        </KeyboardAvoidingView>
    );
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
    },
    lightMode: {
        backgroundColor: '#EFEFEF', // white background for light mode
    },
    darkMode: {
        backgroundColor: '#000000', // black background for dark mode
    }, darkInput: {
        color: 'black'
    }, lightInput: {
        color: 'white'
    }
})

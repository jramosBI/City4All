import * as React from 'react';
import { ActivityIndicator, Image, Text, TextInput, Pressable, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Button, Alert } from 'react-native'

export default function Home({ route }) {
    const { orderName, orderDescription, shippingCompany } = route.params;

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                value={orderName}
                placeholder="Email..."
                keyboardType="email-address"
                editable={false}
            />
            <TextInput
                style={styles.input}
                value={orderDescription}
                placeholder="Password..."
                keyboardType="default"
                editable={false}
            />
            <TextInput
                style={styles.input}
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
    }
})

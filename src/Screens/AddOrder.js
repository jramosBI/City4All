import { Text } from 'react-native'
import * as React from 'react';
import { KeyboardAvoidingView, TextInput, StyleSheet, Pressable, Alert } from 'react-native';

export default function AddOrder() {
    const [emailInput, onChangeEmail] = React.useState('');
    const [passwordInput, onChangePassword] = React.useState('');

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={emailInput}
                placeholder="Add your Name..."
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={passwordInput}
                placeholder="Order Number..."
                keyboardType="default"
            />
            <Pressable style={styles.btn} onPress={() => Alert.alert('Add With Success')}>
                <Text style={styles.label}>Add New Order</Text>
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
    },
})
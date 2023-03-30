import * as React from 'react';
import { Text, TextInput, Pressable, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native'

export default function SignUp({ navigation }) {
    const [emailInput, onChangeEmail] = React.useState('');
    const [passwordInput, onChangePassword] = React.useState('');
    const [passwordValidationInput, onChangeValidationPassword] = React.useState('');

    return (
        <KeyboardAvoidingView style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeEmail}
                value={emailInput}
                placeholder="Email..."
                keyboardType="email-address"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangePassword}
                value={passwordInput}
                placeholder="Password..."
                keyboardType="default"
                secureTextEntry={true}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeValidationPassword}
                value={passwordValidationInput}
                placeholder="Password..."
                keyboardType="default"
                secureTextEntry={true}
            />
            <Pressable style={styles.btn} onPress={() => navigation.navigate('Home')}>
                <Text style={styles.label}>SignUp</Text>
            </Pressable>
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.btnSignUpText}>Already registred? Login here!</Text>
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
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';
import { useColorScheme } from 'react-native';

export default function EntryManual({ navigation }) {
    const colorScheme = useColorScheme();
    let json;
    const [licensePlate, setLicensePlate] = useState('');
    const [ownerContact, setOwnerContact] = useState('');
    async function handleSubmit() {
        let json;
        try {
            const token = await SecureStore.getItemAsync('token');
            const ownerName = await SecureStore.getItemAsync('userName');
            const ownerId = await SecureStore.getItemAsync('userId');

            const response = await axios.post('https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Plates', {
                licensePlate,
                ownerId,
                ownerName,
                ownerContact
            }, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json-patch+json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            if (!response.status === 200) {
                throw new Error('API error');
            }

            if (response.status === 200) {
                alert("License Plate Inserted With Success");
            }

            json = response.data;

        } catch (error) {
            alert("This License Plate Alredy Exists!")
            return;
        }
    }

    return (
        <View style={[styles.container, colorScheme === 'light' ? styles.lightMode : styles.darkMode]}>
            <View style={[styles.card, styles.shadowProp, colorScheme === 'light' ? styles.lightCard : styles.darkCard]}>
                <Text style={styles.header}>Entry</Text>
                <View style={styles.cardContainer}>
                    <Text style={[styles.labelInput, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>License Plate</Text>
                    <TextInput onChangeText={text => setLicensePlate(text)} style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}></TextInput>
                    <Text style={[styles.labelInput, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>Contact</Text>
                    <TextInput onChangeText={text => setOwnerContact(text)} style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}></TextInput>
                    <Pressable onPress={handleSubmit} style={styles.btn}>
                        <Text style={styles.labelText}>
                            Entry License Plate
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.goBack()} style={styles.btn}>
                        <Text style={styles.labelText}>
                            Go Back
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    }, header: {
        padding: 10,
        backgroundColor: '#008080',
        color: 'white',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    }, btn: {
        backgroundColor: '#43c1c9',
        borderRadius: 4,
        padding: 10,
        marginBottom: 13,
    }, labelText: {
        color: 'white'
    }, cardContainer: {
        paddingVertical: 30,
        paddingHorizontal: 40,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 0,
        paddingHorizontal: 0,
        width: '90%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    }, input: {
        height: 40,
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 15,
        width: '100%',
        borderColor: '#43c1c9',
    }, labelInput: {
        marginBottom: 5,
        fontWeight: 'bold'
    }, lightMode: {
        backgroundColor: '#EFEFEF', // white background for light mode
    },
    darkMode: {
        backgroundColor: '#000000', // black background for dark mode
    }, darkCard: {
        backgroundColor: '#181818',
    },
    lightCard: {
        backgroundColor: '#EFEFEF',
    }, lightInput: {
        color: 'white',
    },
    darkInput: {
        color: 'black',
    },
});

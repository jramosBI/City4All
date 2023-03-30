import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Pressable } from 'react-native';
import React from 'react';

export default function EntryManual({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={[styles.card, styles.shadowProp]}>
                <Text style={styles.header}>Entry</Text>

                <View style={styles.cardContainer}>
                    <Text style={styles.labelInput}>License Plate</Text>
                    <TextInput style={styles.input}></TextInput>
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
    }
});

import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, SectionList, Image, StyleSheet, Pressable, TextInput } from 'react-native';
import { NavigationRouteContext } from '@react-navigation/native';


const DATA = [
    {
        data: [
            {
                name: 'Jhonnathan Ramos',
                description: 'Order #2625',
                image: require('../../assets/src/img/user.jpg'),
            }
        ],
    },
]

const renderItem = ({ item }) => (
    <View style={styles.item}>
        <Image source={item.image} style={styles.image} />
        <View styles={styles.itemInsideContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </View>
);

const ParkingList = ({ navigation }) => {
    return (
        <>
            <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>
                    <Text style={styles.header}>List</Text>
                    <View style={styles.cardContainer}>
                    <Text style={styles.labelInput}>Search</Text>
                        <TextInput style={styles.input}></TextInput>
                        <Pressable onPress={() => navigation.navigate('ParkingList')} style={styles.btnDanger}>
                            <Text style={styles.labelText}>
                                Remove
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.navigate('ParkingList')} style={styles.btn}>
                            <Text style={styles.labelText}>
                                Select All
                            </Text>
                        </Pressable>
                        <Pressable onPress={() => navigation.goBack()} style={styles.btn}>
                            <Text style={styles.labelText}>
                                Go Back
                            </Text>
                        </Pressable>
                    </View>
                </View>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem} />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 8,
        justifyContent: 'flex-start',
        width: '100%',
        padding: 17,
        shadowColor: '#171717',
        shadowOffset: { width: -8, height: 11 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    itemInsideContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 8,
    }, description: {
        color: '#43c1c9',
    },
    image: {
        width: 70,
        height: 70,
        marginRight: 16,
        borderRadius: '50%',
        resizeMode: 'contain',
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#f2f2f2',
        paddingVertical: 8,
        paddingHorizontal: 16,
    }, container: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
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
    }, btnDanger: {
        backgroundColor: '#EE0B0B',
        borderRadius: 4,
        padding: 10,
        marginBottom: 13,
    }
});

export default ParkingList;
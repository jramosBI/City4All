import React, { useState, useEffect } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, SectionList, Image, StyleSheet, Pressable, TextInput, VirtualizedList } from 'react-native';
import * as SecureStore from 'expo-secure-store';

const ParkingList = ({ navigation }) => {
    const [sections, setSections] = useState([]);
    const [plate, setPlate] = useState('');

    React.useEffect(() => {
        async function retrieveToken() {
            const token = await SecureStore.getItemAsync('token');

            const fetchData = () => {
                fetch(`https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Plates?plate=${plate}`, {
                    method: 'GET',
                    headers: {
                        Accept: 'application/json',
                        Authorization: `Bearer ${token}`,
                    },
                })
                    .then((response) => response.json())
                    .then((json) => {
                        const data = json.value.map((item) => ({
                            id: item.id,
                            licensePlate: item.licensePlate,
                            ownerName: item.ownerName,
                            ownerContact: item.ownerContact,
                        }));
                        const sections = [{ title: 'Plates', data }];
                        setSections(sections);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            };

            fetchData();
        }
        retrieveToken();
    }, [plate]);

    return (
        <>
            <View style={styles.container}>
                <View style={[styles.card, styles.shadowProp]}>
                    <Text style={styles.header}>List</Text>
                    <View style={styles.cardContainer}>
                        <Text style={styles.labelInput}>Search</Text>
                        <TextInput style={styles.input} onChangeText={setPlate}></TextInput>
                        {/* <Pressable onPress={() => navigation.navigate('ParkingList')} style={styles.btnDanger}>
                            <Text style={styles.labelText}>
                                Remove
                            </Text>
                        </Pressable> */}
                        <Pressable onPress={() => setPlate('')} style={styles.btn}>
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
            </View>
            <View style={styles.secondContainer}>
                <SectionList
                    sections={sections}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <View style={styles.plateView}>
                                <Text style={styles.description}>{item.licensePlate}</Text>
                            </View>
                            <View style={styles.itemInsideContainer}>
                                <Text style={styles.name}>{item.ownerName}</Text>
                                <Text style={styles.contact}>{item.ownerContact}</Text>
                            </View>
                        </View>
                    )}
                    renderSectionHeader={({ section }) => (
                        <View>
                            <Text style={styles.sectionHeader}>{section.title}</Text>
                        </View>
                    )}
                />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondContainer: {
        flex: 1.5
    },
    item: {
        flexDirection: 'row',
        padding: 20,
        width: '90%',
        justifyContent: 'space-between',
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
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
    }, plateView: {
        width: 120,
        alignItems: 'center',
        marginHorizontal: 20,
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 20,
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
    contact: {
        marginTop: 10,
        color: '#43c1c9',
        fontSize: 15,
    },
    container: {
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
    }, sectionHeader: {
        alignItems: 'center',
        width: '100%',
        padding: 20,
        backgroundColor: '#008080',
        color: 'white',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    }
});

export default ParkingList;
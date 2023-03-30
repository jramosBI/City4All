import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    SectionList,
    StatusBar,
} from 'react-native';
import { Button } from 'react-native';

const DATA = [
    {
        title: 'Encomendas a Receber',
        data: ['Description: Manual Order', 'User Name: Jhonnathan Ramos', 'Company Name: CTT', 'Input Code: #2625', 'Description: Fragile'],
    }
];

const OrdersPerId = () => (
    <SafeAreaView style={styles.container}>
        <SectionList
            sections={DATA}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => (
                <View style={styles.item}>
                    <Text style={styles.title}>{item}</Text>
                </View>
            )}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
            )}
        />
        <Button style={styles.floatigBtn}>
            <Text>Teste</Text>
        </Button>
    </SafeAreaView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        marginHorizontal: 100,
        marginVertical: 10
    },
    item: {
        backgroundColor: 'white',
        padding: 5,
        marginVertical: 5,
        borderRadius: 10,
    },
    header: {
        marginTop: 20,
        fontSize: 20,
        backgroundColor: '#43c1c9',
        borderTopStartRadius: 10,
        borderTopEndRadius: 10,
        padding: 10,
        color: 'white'
    },
    title: {
        fontSize: 15,
    },
    floatigBtn: {
        position: 'fixed',

    }
});

export default OrdersPerId;
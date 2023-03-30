import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, SectionList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationRouteContext } from '@react-navigation/native';


const DATA = [
  {
    data: [
      {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      }, {
        name: 'Jhonnathan Ramos',
        description: 'Order #2625',
        image: require('../../assets/src/img/user.jpg'),
      },
    ],
  },
]

const renderItem = ({ item }) => (
  <View style={[styles.item, styles.shadowProp]}>
    <Image source={item.image} style={styles.image} />
    <View styles={styles.itemInsideContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  </View>
);

const Order = ({ navigation }) => {
  return (
    <>
      <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem} />
      <View style={styles.viewFlutingBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('AddOrder')}><Ionicons name={'add-circle'} size={60} color={'#43c1c9'} /></TouchableOpacity>
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
  viewFlutingBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    alignSelf: 'flex-end'
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f2f2f2',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});

export default Order;
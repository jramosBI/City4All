import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, SectionList, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';


const Order = ({ navigation }) => {
  const [deliveries, setDeliveries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const token = await SecureStore.getItemAsync('token');
      const headers = {
        Accept: 'application/json',
        Authorization: `Bearer ${token}`,
      };
      const response = await axios.get('https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Deliveries', { headers });
      setDeliveries(response.data.value);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });

    return unsubscribe;
  }, [navigation]);

  const fetchData = async () => {
    const token = await SecureStore.getItemAsync('token');
    const headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };
    const response = await axios.get('https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Deliveries', { headers });
    setDeliveries(response.data.value);
  };

  const groupDeliveries = () => {
    const groupedData = deliveries.reduce((result, delivery) => {
      const key = delivery.deliveryStatus;
      if (!result[key]) {
        result[key] = [];
      }
      result[key].push(delivery);
      return result;
    }, {});

    const data = Object.keys(groupedData).map((key) => ({
      title: key,
      data: groupedData[key].map((delivery) => ({
        name: delivery.recipientName,
        description: delivery.description,
        shippingCompany: delivery.shippingCompany,
        image: require('../../assets/src/img/package.jpg'),
      })),
    }));
    return data;
  };

  const renderDeliveryItem = ({ item }) => {
    const navigateToOrder = () => {
      navigation.navigate('OrderPerId', { orderName: item.name, orderDescription: item.description, shippingCompany: item.shippingCompany });
    };

    return (
      <TouchableOpacity style={styles.item} onPress={navigateToOrder}>
        <Image style={styles.image} source={item.image} />
        <View style={styles.itemInsideContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };


  const renderSectionHeader = ({ section }) => {
    return (
      <Text style={styles.header}>{section.title}</Text>
    );
  };

  const handleAddOrderPress = () => {
    navigation.navigate('AddOrder');
  };

  return (
    <View>
      <SectionList
        sections={groupDeliveries()}
        keyExtractor={(item, index) => item + index}
        renderItem={renderDeliveryItem}
        renderSectionHeader={renderSectionHeader}
      />
      <View style={styles.container}>
        <TouchableOpacity style={styles.floatingButton} onPress={handleAddOrderPress}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
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
  },
  description: {
    color: '#43c1c9',
  },
  image: {
    width: 70,
    height: 70,
    marginRight: 16,
    borderRadius: 35,
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
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#43c1c9',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  buttonText: {
    fontSize: 30,
    color: 'white',
  },
});

export default Order;

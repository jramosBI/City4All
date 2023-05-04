import { StyleSheet, Text, View, Pressable, Alert, TextInput, ScrollView, Image, useColorScheme } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as SecureStore from 'expo-secure-store';

export default function Profile() {
  const colorScheme = useColorScheme();
  const [userName, setUserName] = useState('');
  const [name, setName] = useState('');

  React.useEffect(() => {

    async function retrieveToken() {
      const nameValue = await SecureStore.getItemAsync('name');
      const token = await SecureStore.getItemAsync('token');
      fetch(`https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Users?search=${nameValue}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          setUserName(json.value[0].username);
          setName(json.value[0].name);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    retrieveToken();
  }, []);
  return (
    <ScrollView style={[colorScheme === 'light' ? styles.lightMode : styles.darkMode]}>
      <View style={styles.container}>
        <View style={[styles.card, styles.shadowProp, colorScheme === 'light' ? styles.lightCard : styles.darkCard]}>
          <Text style={styles.header}>Edit User Profile</Text>
          <View style={styles.cardContainer}>
            <Text style={[styles.labelInput, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>Name</Text>
            <TextInput style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>{name}</TextInput>
            <Pressable onPress={() => Alert.alert('Name Changed With Success')} style={styles.btn}>
              <Text style={styles.labelText}>
                <Ionicons name={'create-outline'} size={20} color={'white'} /> Change Name
              </Text>
            </Pressable>
            <Text style={[styles.labelInput, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>User</Text>
            <TextInput style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>{userName}</TextInput>
            <Pressable onPress={() => Alert.alert('User Changed With Success')} style={styles.btn}>
              <Text style={styles.labelText}>
                <Ionicons name={'create-outline'} size={20} color={'white'} /> Change User
              </Text>
            </Pressable>
            <Text style={[styles.labelInput, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>Old Password</Text>
            <TextInput style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}></TextInput>
            <Text style={[styles.labelInput, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>New Password</Text>
            <TextInput style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}></TextInput>
            <Text style={[styles.labelInput, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>Confirm Password</Text>
            <TextInput style={[styles.input, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}></TextInput>
            <Pressable onPress={() => Alert.alert('Password Changed With Success')} style={styles.btn}>
              <Text style={styles.labelText}>
                <Ionicons name={'create-outline'} size={20} color={'white'} /> Change Password
              </Text>
            </Pressable>
            <Text style={[styles.labelInput, colorScheme === 'light' ? styles.darkInput : styles.lightInput]}>Profile Photo</Text>
            <Image
              style={styles.imgInput}
              source={require('../../assets/src/img/user.jpg')}
              resizeMode={'contain'}
            />
            <Pressable onPress={() => Alert.alert('Profile Photo Changed With Success')} style={styles.btn}>
              <Text style={styles.labelText}>
                <Ionicons name={'create-outline'} size={20} color={'white'} /> Change Photo
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
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
  }, labelInput: {
    marginBottom: 5,
    marginTop: 15,
    fontWeight: 'bold'
  }, input: {
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    width: '100%',
    borderColor: '#43c1c9',
  }, imgInput: {
    width: 100,
  },
  lightMode: {
    backgroundColor: '#EFEFEF', // white background for light mode
    color: 'black'
  },
  darkMode: {
    backgroundColor: '#000000', // black background for dark mode
    color: 'white'
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

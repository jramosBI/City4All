import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView, Pressable, useColorScheme } from 'react-native';
import React, { useState } from 'react';

export default function Parking({ navigation }) {
  const colorScheme = useColorScheme();
  return (
    <View style={[styles.container, colorScheme === 'light' ? styles.lightMode : styles.darkMode]}>
      <View style={[styles.card, styles.shadowProp, colorScheme === 'light' ? styles.lightCard : styles.darkCard]}>
        <Text style={styles.header}>Entry</Text>
        <View style={styles.cardContainer}>
          <Pressable onPress={() => navigation.navigate('ScanPlate')} style={styles.btn}>
            <Text style={styles.labelText}>
              Capture License Plate
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('EntryManual')} style={styles.btn}>
            <Text style={styles.labelText}>
              Manual Registration
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={[styles.card, styles.shadowProp, colorScheme === 'light' ? styles.lightCard : styles.darkCard]}>
        <Text style={styles.header}>List</Text>
        <View style={styles.cardContainer}>
          <Pressable onPress={() => navigation.navigate('ParkingList')} style={styles.btn}>
            <Text style={styles.labelText}>
              List All
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
  }, darkCard: {
    backgroundColor: '#181818',
  },
  lightCard: {
    backgroundColor: '#EFEFEF',
  },
  lightMode: {
    backgroundColor: '#EFEFEF', // white background for light mode
  },
  darkMode: {
    backgroundColor: '#000000', // black background for dark mode
  },
});

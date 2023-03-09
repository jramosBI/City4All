import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import React from 'react';

export default function Parking() {
  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={-64}
      style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Entry</Text>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Capture License Plate</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Manual Registration</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>List</Text>
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}>Parking Lot</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  }, headerText: {
    fontSize: 20,
    backgroundColor: '#43c1c9',
    color: 'white',
    padding: 15,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginHorizontal: 30,
    marginVertical: 30,
  }, input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#D5D3D3',
    marginHorizontal: 30,
  }, labelText: {
    marginHorizontal: 30,
    fontWeight: 'bold',
    fontSize: 17,
  }, btnSubmit: {
    backgroundColor: '#43c1c9',
    padding: 5,
    marginBottom: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 30,
  }, btnText: {
    color: 'white',
    fontSize: 18,
  }
});

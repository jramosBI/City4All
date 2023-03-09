import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function User() {
  const [text, onChangeText] = React.useState('');
  return (
    <KeyboardAvoidingView
      behavior='padding'
      keyboardVerticalOffset={-64}
      style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>User Page!</Text>
        <Text style={styles.labelText}>Name</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Jhonnathan Ramos"
          keyboardType="text"
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}><Ionicons name='create-outline' size='12' color='white' />Change Name</Text>
        </TouchableOpacity>
        <Text style={styles.labelText}>User</Text>
        <TextInput
          style={styles.input}
          value={text}
          placeholder="jramos"
          keyboardType="text"
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}><Ionicons name='create-outline' size='12' color='white' />Change User</Text>
        </TouchableOpacity>
        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Jhonnathan Ramos"
          keyboardType="text"
          secureTextEntry={true}
        />
        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Jhonnathan Ramos"
          keyboardType="text"
          secureTextEntry={true}
        />
        <Text style={styles.labelText}>Password</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
          placeholder="Jhonnathan Ramos"
          keyboardType="password"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}><Ionicons name='create-outline' size='12' color='white' />Change Password</Text>
        </TouchableOpacity>
        <Text style={styles.labelText}>Profile Photo</Text>
        <Image
          style={styles.tinyLogo}
          source={require('../assets/img/user.jpg')}
        />
        <TouchableOpacity style={styles.btnSubmit}>
          <Text style={styles.btnText}><Ionicons name='create-outline' size='12' color='white' />Change Profile Photo</Text>
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
  }, tinyLogo: {
    width: 100,
    height: 100,
    marginHorizontal: 30,
    margin: 10,
  }
});

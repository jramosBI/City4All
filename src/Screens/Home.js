import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useColorScheme } from 'react-native';

export default function Home() {
    const colorScheme = useColorScheme();
    return (
        <View style={[styles.container, colorScheme === 'light' ? styles.lightMode : styles.darkMode]}>
            <Text>Home!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
    },
    lightMode: {
        backgroundColor: '#EFEFEF', // white background for light mode
    },
    darkMode: {
        backgroundColor: '#000000', // black background for dark mode
    },
})

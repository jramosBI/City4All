import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as SecureStore from 'expo-secure-store';
import { useColorScheme } from 'react-native';

export default function ScanPlate({ navigation }) {
    const colorScheme = useColorScheme();
    const [hasPermission, setHasPermission] = useState(null);
    const [camera, setCamera] = useState(null);
    const [imageUri, setImageUri] = useState(null);
    const [showCamera, setShowCamera] = useState(true);
    const [licensePlate, setLicensePlate] = useState("");

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);

    const takePicture = async () => {
        if (camera) {
            const photo = await camera.takePictureAsync({ base64: true });
            const token = await SecureStore.getItemAsync('token');
            setImageUri(photo.uri);
            setShowCamera(false);
            camera.pausePreview();
            fetch('https://app-city4all-qa-westeurope-002.azurewebsites.net/api/Accesses/entry/auto', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'application/json-patch+json',
                },
                body: JSON.stringify({
                    b64Image: photo.base64,
                }),
            })
                .then(response => response.json())
                .then(data => {
                    setLicensePlate(data.value.licensePlate);
                })
                .catch(error => {
                    console.error(error); // Handle the error
                });
        }
    };


    const resumePreview = () => {
        if (camera) {
            camera.resumePreview();
            setShowCamera(true);
            setImageUri(null);
        }
    };

    const takeAnotherPicture = () => {
        setShowCamera(true)
        setImageUri(false)
    }

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={[styles.container, colorScheme === 'light' ? styles.lightMode : styles.darkMode]}>
            {!showCamera && (
                <>
                    <TouchableOpacity style={styles.btn} onPress={() => navigation.goBack('')}>
                        <Text style={styles.btnText}>Use this License Plate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => takeAnotherPicture()}>
                        <Text style={styles.btnText}>Take Another Picture</Text>
                    </TouchableOpacity>
                </>
            )}
            {showCamera && (
                <Camera style={styles.camera} ref={setCamera}>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={takePicture}>
                        </TouchableOpacity>
                    </View>
                </Camera>
            )}
            {imageUri && (
                <TouchableOpacity onPress={resumePreview}>
                    <Image source={{ uri: imageUri }} style={styles.image} />
                </TouchableOpacity>
            )}
            <Text style={styles.text}>{licensePlate}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    buttonContainer: {
        width: '100%',
        backgroundColor: 'transparent',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    button: {
        width: 80,
        height: 80,
        marginBottom: 40,
        backgroundColor: '#fff',
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#555',
    },
    image: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginVertical: 30,
    }, btn: {
        width: '70%',
        height: 40,
        margin: 10,
        borderRadius: 15,
        backgroundColor: '#43c1c9',
        justifyContent: 'center',
        alignItems: 'center'
    }, btnText: {
        color: 'white'
    }, lightMode: {
        backgroundColor: '#EFEFEF', // white background for light mode
    },
    darkMode: {
        backgroundColor: '#000000', // black background for dark mode
    }, text: {
        color: "white",
        fontSize: 26,
        fontWeight: "bold"
    }
});

import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';

import ImageSelector from '../components/ImageSelector';

export const TakePictureScreen = () => {
    const [ selectedImage, setSelectedImage ] = useState();

    const imageSelectorHandler = imagePath => {
        setSelectedImage(imagePath);
    }
    return (
        <View>
            <View style={ styles.form }>
                <Text style={ styles.label }>Lets take a picture!</Text>
                {
                    !selectedImage &&
                    <ImageSelector onImageSelected={ imageSelectorHandler }></ImageSelector>
                }
                {
                    selectedImage &&
                    <View>
                        <Image style={ styles.image } source={ { uri: selectedImage } } />
                        <Button title="Reset" onPress={ () => { setSelectedImage(null) } } />
                    </View>
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        margin: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        fontSize: 18,
        marginBottom: 30,
        textAlign: 'center'
    },
    image: {
        width: 400,
        height: 400
    }
});

// export default TakePictureScreen;
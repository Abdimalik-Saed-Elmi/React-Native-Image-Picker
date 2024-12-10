import { View, StyleSheet } from 'react-native';

import Button from '@/components/Button';
import Imageviewer from '@/components/Imageviewer';
import * as ImagePicker  from 'expo-image-picker';
import { useState } from 'react';





const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {

  const [selectImage, setSelectImage] = useState<string | undefined>(
    undefined
  )

  const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setSelectImage(result.assets[0].uri)
      } else {
        alert('You did not select any image.');
      }
    };
  
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Imageviewer imgSource={selectImage || PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button onPress={pickImage} theme="primary" label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

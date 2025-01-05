import ImagePicker from 'react-native-image-crop-picker';
import { Alert } from 'react-native';

export const handleCameraSelect = () => {
  return ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  })
    .then(image => {
      console.log('Selected image from camera:', image);
      return image; 
    })
    .catch(error => {
      // console.log('Error opening camera:', error);
      // Alert.alert('Myntra', 'Camera cannot run camera on simulator');
      throw error;
    });
};

export const handleGallerySelect = () => {
  return ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true,
  })
    .then(image => {
      console.log('Selected image from gallery:', image);
      return image;
    })
    .catch(error => {
      console.log('Error opening gallery:', error);
      throw error; 
    });
};

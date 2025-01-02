import ImagePicker from 'react-native-image-crop-picker';

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
      console.log('Error opening camera:', error);
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
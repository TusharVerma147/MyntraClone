import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import styles from './styles';
import { Icons } from '../../../assets';

type SelectPhotoModalProps = {
  isVisible: boolean;
  onClose: () => void;
  onCameraSelect: () => void;
  onGallerySelect: () => void;
};

const SelectPhotoModal: React.FC<SelectPhotoModalProps> = ({
  isVisible,
  onClose,
  onCameraSelect,
  onGallerySelect,
}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={onClose}>
            <TouchableWithoutFeedback onPress={onClose}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Text style={styles.title}>Select Photo</Text>
          <TouchableOpacity style={styles.option} onPress={onCameraSelect} activeOpacity={0.8}>
            <Image source={Icons.camera} style={styles.backicon}/>
            <Text style={styles.optionText}>Camera</Text>
            <Text style={styles.optionSubText}>Take a beautiful picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option} onPress={onGallerySelect} activeOpacity={0.8}>
            <Image source={Icons.gallery} style={styles.backicon}/>
            <Text style={styles.optionText}>Gallery</Text>
            <Text style={styles.optionSubText}>Choose an existing photo</Text>
          </TouchableOpacity>
        </View>
      </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};



export default SelectPhotoModal;

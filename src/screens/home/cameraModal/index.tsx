import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import { colors } from '../../../theme';
import { vh } from '../../../theme/dimensions';
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

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  container: {
    width: '95%',
    backgroundColor: colors.white,
    borderRadius: 10,
    paddingHorizontal: vh(20),
    paddingVertical:vh(10)
  },
  title: {
    fontSize: vh(15),
    color:colors.textGrey,  
  },
  option: {
    width: '100%',
    paddingVertical: vh(10),
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.platinum,
    flexDirection:'row',
    marginTop:vh(10)
  },
  backicon: {height: vh(20), width: vh(20), tintColor:colors.textinput,},
  optionText: {
    fontSize: vh(16),
    color: colors.textinput,
    marginHorizontal:vh(5),
    fontWeight:'700'   
  },
  optionSubText: {
    fontSize: vh(14),
    color: colors.textGrey,
    marginHorizontal:vh(5)   
  },
});

export default SelectPhotoModal;

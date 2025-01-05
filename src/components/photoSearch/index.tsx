import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './styles';

const PhotoSearch = ({ onPress, icon, text, style }: { onPress: () => void, icon: any, text: string,  style?: object  }) => (
  <TouchableOpacity activeOpacity={0.8} style={[styles.photoButton, style]} onPress={onPress}>
    <Image style={styles.backicon} source={icon} />
    <Text style={styles.buttonText}>{text}</Text>
  </TouchableOpacity>
);

export default PhotoSearch;

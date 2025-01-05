import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

interface InfoIconProps {
  icon: any;
  text: string;
}

const InfoIcon: React.FC<InfoIconProps> = ({ icon, text }) => {
  return (
    <View style={styles.iconview}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.infotext}>{text}</Text>
    </View>
  );
};

export default InfoIcon;

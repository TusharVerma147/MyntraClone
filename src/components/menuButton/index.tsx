import React from 'react';
import { TouchableOpacity, View, Image, Text, GestureResponderEvent } from 'react-native';
import { Icons } from '../../assets';
import styles from './styles';



interface MenuItemProps {
  icon: any; 
  label: string;
  onPress?: (event: GestureResponderEvent) => void;
}


const MenuItem: React.FC<MenuItemProps> = ({ icon, label, onPress }) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      <View style={styles.splashview}>
        <Image source={icon} style={styles.menuIcon} />
        <Text style={styles.menuText}>{label}</Text>
      </View>

      <Image source={Icons.forward} style={styles.forward} />
    </TouchableOpacity>
  );
};


export default MenuItem;
